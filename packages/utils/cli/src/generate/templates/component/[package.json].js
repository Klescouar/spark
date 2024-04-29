export default ({ name, description }) => `{
  "name": "@spark-ui/${name}",
  "version": "0.0.0",
  "description": "${description}",
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "@spark-ui",
    "react",
    "component",
    "accessible",
    "accessibility",
    "wai-aria",
    "aria",
    "a11y",
    "${name}"
  ],
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "vite build"
  },
  "peerDependencies": {
    "@spark-ui/theme-utils": "^4.0.0",
    "react": "^18.0 || ^19.0",
    "react-dom": "^18.0 || ^19.0",
    "tailwindcss": "^3.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/adevinta/spark.git",
    "directory": "packages/components/${name}"
  },
  "config": {
    "title": "${name}",
    "category": "components"
  },
  "bugs": {
    "url": "https://github.com/adevinta/spark/issues?q=is%3Aopen+label%3Autility+label%3A${name}"
  },
  "homepage": "https://sparkui.vercel.app",
  "license": "MIT"
}
`
