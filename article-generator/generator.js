import fs from 'node:fs'
import { marked } from 'marked'
import { template } from './generator-template.js'

// Name of the md file
const articleMdName = 'article'

// Final html article file name
const finalHtmlArticleName = 'sample'

// Title of the article (will be used in the HTML title tag)
const articleHtmlTitle = 'Sample title'

// Destinated path of the HTML file
const DESTINATED_PATH = `../pages/${finalHtmlArticleName}.html`

// Reading md file and converting to html

const readingMd = fs.readFileSync(`../md/${articleMdName}.md`, 'utf-8')
const htmlFromReadedMd = marked(readingMd)
const htmlFromTemplate = template({ htmlFromReadedMd, articleHtmlTitle })

// Writing html file
// Format: wrinteFile(path, data, callback)

fs.writeFile(DESTINATED_PATH, htmlFromTemplate, err => {
  if (err) {
    console.error(err)
  } else {
    // file written successfully
  }
})
