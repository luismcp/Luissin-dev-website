import fs from 'node:fs'
import { marked } from 'marked'
import { template } from './generator-template.js'

// Documents info

const docName = 'sample'
const docTitle = 'Sample title'
const DESTINATED_PATH = `../pages/${docName}.html`

// Reading md file and converting to html

const readingMd = fs.readFileSync('../md/my-first-article.md', 'utf-8')
const htmlFromReadedMd = marked(readingMd)
const htmlFromTemplate = template({ htmlFromReadedMd, docTitle })

// Writing html file
// Format: wrinteFile(path, data, callback)

fs.writeFile(DESTINATED_PATH, htmlFromTemplate, err => {
  if (err) {
    console.error(err)
  } else {
    // file written successfully
  }
})
