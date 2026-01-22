// Nedded html info
const stringFromMd =
`
    <h1>Sample text!</h1>
`
const articleTitle = 'Article doc'

// To export html template
const myHtml =
`<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${articleTitle}</title>
</head>

<body>
    <div id="app">
        ${stringFromMd}
    </div>

    <script type="module" src="/src/main.js"></script>
</body>
    
</html>
`

// Exporting the html template + string
export { myHtml }
