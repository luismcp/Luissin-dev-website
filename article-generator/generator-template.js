// To export html template

const template = ({ htmlFromReadedMd, articleHtmlTitle }) => {
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
                inlineMath: [['$', '$']]
            }
        };
    </script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark-dimmed.min.css">
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
    <script>hljs.highlightAll();</script>

    <link rel="stylesheet" href="/src/style.css" />
    <link rel="stylesheet" href="/src/pages.css" />
    <title>${articleHtmlTitle}</title>
</head>

<body>
    <main class="main">
        ${htmlFromReadedMd}
    </main>

</body>
    
</html>
`
}

// Exporting the html template + string
export { template }
