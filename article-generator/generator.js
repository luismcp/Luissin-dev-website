import { writeFile } from 'node:fs'
import { myHtml } from './template.js'

// Format: wrinteFile(path, data, callback)

const docName = 'new-doc'
const DESTINATED_PATH = `../src/blog-articles/${docName}.html`

writeFile(DESTINATED_PATH, myHtml, err => {
  if (err) {
    console.error(err)
  } else {
    // file written successfully
  }
})
