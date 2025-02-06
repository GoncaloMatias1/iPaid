import { build } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function buildApp() {
  try {
    await build({
      root: __dirname,
      configFile: resolve(__dirname, 'vite.config.js')
    })
    console.log('Build completed successfully')
  } catch (e) {
    console.error('Build failed:', e)
    process.exit(1)
  }
}

buildApp()