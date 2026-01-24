<div class="main-info">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing eli olestias libero impedit</h1>
    <div class="categories">
        <span class="category">Life style ☕</span>
        <span class="category">Programming 💻</span>
    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit odit omnis, atque, aut repellat
        voluptas nulla qui harum fuga vel accusantium illo cum soluta quam sed ea eius nisi Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Tempora voluptatem velit suscipit. Modi animi qui non fugiat.
    </p>
</div>
<div class="banner-article">
    <img src="../public/images/pexels-8.jpg" alt="sreet from a random world site">
</div>

## Comprendamos la programación de este sitio

Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat iaculis, inceptos leo potenti magna fusce sem nunc nulla, montes at natoque lobortis arcu dis leo potenti `console.log("Hello world")` primis consequat. Ligula turpis sed mollis cubilia curae fermentum luctus [phasellus ultricies quisque](https://www.markdownguide.org/basic-syntax/) cras, taciti sollicitudin ante tellus pellentesque dapibus lacus habitant at nostra. **Phasellus** natoque condimentum cras sollicitudin parturient nunc **est ligula, proin eleifend dis commodo dictumst** fringilla nisi, posuere purus metus imperdiet nostra lacus tempor.

- This is a list template
- Just the second item
- Adding one more
- Last one

> Sometimes we need to add a blockquote to extract some relevant text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, explicabo! Cum voluptates sequi beatae aperiam vero. Mollitia quasi odit exercitationem nam at officia nisi suscipit, quo non sapiente provident veritatis?

~~~
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
~~~

![A bakery](https://images.pexels.com/photos/20848558/pexels-photo-20848558.jpeg)

\* Without the backslash, this would be a bullet in an unordered list.

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
