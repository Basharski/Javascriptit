'use strict';

const form = document.getElementById('search-form');
const input = document.getElementById('query');
const results = document.getElementById('results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = input.value.trim();
  if (query === '') {
    return;
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  results.innerHTML = '';

  for (const item of data) {
    const show = item.show;

    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = show.name;
    article.appendChild(h2);

    const link = document.createElement('a');
    link.href = show.url;
    link.target = '_blank';
    link.textContent = show.url;
    article.appendChild(link);

    const img = document.createElement('img');
    img.src = show.image?.medium;
    img.alt = show.name;
    article.appendChild(img);

    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = show.summary;
    article.appendChild(summaryDiv);

    results.appendChild(article);
  }
});
