// To export html template

const template = ({ htmlFromReadedMd, docTitle }) => {
  return `
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script>
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']]
            }
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
    <title>${docTitle}</title>
</head>

<body>
    <div id="app">
        ${htmlFromReadedMd}
    </div>

    <script type="module" src="/src/main.js"></script>
</body>
    
</html>
`
}

// Exporting the html template + string
export { template }
