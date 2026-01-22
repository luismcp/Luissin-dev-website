import { articles } from '../data/articles-info'
const cardsBox = document.querySelector('.cards-box')

articles.forEach((article) => {
  cardsBox.innerHTML +=
  `
    <article id=${article.id} class="article-card">
      <a href="${article.href}">
        <img src=${article.img_url} alt=${article.img_alt} />
        <div class="article-card__info">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
      </div>
      </a>
    </article>
  `
})
