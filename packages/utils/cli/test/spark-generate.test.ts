import path from 'node:path'

import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { TemplateGenerator } from '../src/generate/generators/TemplateGenerator.mjs'
import cmd, { ENTER } from './utils/cmd'

const __dirname = fileURLToPath(import.meta.url)
const cliPath = path.join(__dirname, '../../bin/spark.mjs')
const cliProcess = cmd.create(cliPath)

describe('CLI `spark generate` (component package)', () => {
  const packageType = 'component'

  const contextPath = TemplateGenerator.CONTEXTS[packageType] as string

  const packagePath = path.join(process.cwd(), 'packages', contextPath, 'bar')
  const invalidPackagePath = path.join(process.cwd(), 'packages', contextPath, '123')

  beforeEach(() => {
    if (fse.existsSync(packagePath)) fse.removeSync(packagePath)
  })

  afterAll(() => {
    if (fse.existsSync(packagePath)) fse.removeSync(packagePath)
  })

  it('should properly generate package from CLI when arguments are valid', async () => {
    const response = await cliProcess.execute(
      ['generate'],
      ['bar', ENTER, packageType, ENTER, 'This is my foo component', ENTER]
    )

    ;[
      '/.npmignore',
      '/package.json',
      '/src/index.ts',
      '/src/Bar.styles.ts',
      '/src/Bar.tsx',
      '/vite.config.ts',
      '/src/Bar.doc.mdx',
      '/src/Bar.test.tsx',
      '/src/Bar.stories.tsx',
      '/tsconfig.json',
    ].forEach((filePath: string) => {
      expect(response).toContain(`Created ${packagePath}${filePath}`)
      expect(fse.pathExistsSync(`${packagePath}${filePath}`)).toBe(true)
    })
  })

  it('should prevent generating package when argument are invalid', async () => {
    const response = await cliProcess.execute(['generate'], ['123', ENTER])

    expect(response).toContain(
      'Name name must contain letters and dash symbols only (ex: "my-package")'
    )

    expect(fse.pathExistsSync(invalidPackagePath)).toBe(false)
  })
})
