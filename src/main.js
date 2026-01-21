import { articles } from '../data/sample'
const cardsBox = document.querySelector('.cards-box')

articles.forEach((article) => {
  cardsBox.innerHTML += `
    <div id=${article.id} class="article-card">
    <img src=${article.img_url} alt=${article.img_alt} />
    <h2>${article.title}</h2>
        <p>${article.description}</p>
    </div>
    `
})
