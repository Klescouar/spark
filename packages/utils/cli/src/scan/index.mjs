import * as process from 'node:process'

import { appendFileSync, existsSync } from 'fs'
import path from 'path'

import { scanCallback } from './scanCallback.mjs'
import { logger } from './utils/logger.mjs'
import { scanDirectories } from './utils/scan-directories.mjs'

const DEFAULT_CONFIG = {
  adoption: {
    details: false,
    alpha: false,
    imports: ['@spark-ui'],
    extensions: ['.tsx', '.ts'],
    directory: '.',
  },
}

export async function adoption(options) {
  let config = DEFAULT_CONFIG

  const configFileRoute = path.join(process.cwd(), options.configuration || '.spark-ui.cjs')
  try {
    if (existsSync(configFileRoute)) {
      console.log('✨✨✨ loading spark-ui custom configuration file ✨✨✨')
      const { default: customConfig } = await import(
        path.join(process.cwd(), options.configuration)
      )
      config = structuredClone(customConfig, DEFAULT_CONFIG)
    }
  } catch (error) {
    logger.info('ℹ️ Loading default configuration')
  }

  const extensions = config.adoption.extensions

  let lastScanCount = 0
  const importCount = 0
  const importResults = {}
  let importsUsed = {}
  let importsCount = {}
  config.adoption.imports.forEach(moduleName => {
    console.log(`scanning adoption for ${moduleName}`)
    const directoryPath = path.join(process.cwd(), config.adoption.directory)
    scanDirectories(directoryPath, moduleName, extensions, scanCallback, {
      importCount,
      importResults,
      importsUsed,
      importsCount,
    })
    if (importCount !== lastScanCount) {
      logger.success(
        `Found ${importCount - lastScanCount} files with "${moduleName}" imports across directory ${directoryPath}:`
      )
    } else {
      logger.warn(`No files found with "${moduleName}" imports across directory ${directoryPath}.`)
    }
    lastScanCount = importCount
  })

  // Sort importsUsed by alphabet
  if (config.adoption.alpha) {
    importsUsed = Object.fromEntries(
      Object.entries(importsUsed)
        .sort(([pkgNameA], [pkgNameB]) => pkgNameA.localeCompare(pkgNameB))
        .map(([pkgname, content]) => {
          return [
            pkgname,
            {
              default: Object.fromEntries(
                Object.entries(content.default).sort(([a], [b]) => a.localeCompare(b))
              ),
              named: Object.fromEntries(
                Object.entries(content.named).sort(([a], [b]) => a.localeCompare(b))
              ),
              importsCount: content.importsCount,
            },
          ]
        })
    )
  } else {
    // Sort importsUsed by most used
    importsUsed = Object.fromEntries(
      Object.entries(importsUsed)
        .sort(([, contentA], [, contentB]) => contentB.importsCount - contentA.importsCount)
        .map(([pkgName, content]) => {
          return [
            pkgName,
            {
              default: Object.fromEntries(
                Object.entries(content.default).sort(([, a], [, b]) => b - a)
              ),
              named: Object.fromEntries(
                Object.entries(content.named).sort(([, a], [, b]) => b - a)
              ),
              importsCount: content.importsCount,
            },
          ]
        })
    )

    importsCount = Object.fromEntries(Object.entries(importsCount).sort(([, a], [, b]) => b - a))
  }

  const result = Object.fromEntries(
    Object.entries(importsUsed).map(([pkgName, value]) => [
      pkgName,
      { ...value, ...(config.adoption.details && { results: importResults[pkgName] }) },
    ])
  )

  if (options.output) {
    try {
      appendFileSync(`${options.output}`, JSON.stringify(result, null, 2))
    } catch (err) {
      logger.error(`Error writing file: ${err}`)
    }
  } else {
    logger.info(JSON.stringify(result, null, 2))
  }
}
