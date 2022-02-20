function getArticleGenerator(articles) {

    return () => {
        if (articles.length) {
            let contentDiv = document.getElementById('content');
            let article = document.createElement('article');
            let articleText = articles.shift();
            article.innerHTML = articleText;
            contentDiv.appendChild(article);
        }
    }

}