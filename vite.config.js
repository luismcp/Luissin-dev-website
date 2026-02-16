import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

function getHtmlFiles () {
  const files = fs.readdirSync(__dirname)

  const inputs = {}

  files.forEach(file => {
    if (file.endsWith('.html')) {
      const name = file.replace('.html', '')
      inputs[name] = resolve(__dirname, file)
    }
  })

  return inputs
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlFiles()
    }
  }
})
