const buttons = document.querySelectorAll('button.buttonfav')

function setFav(button) {
    const parentArticle = button.closest('article')
    //const parentArticle2 = button.closest('.article-content')
    const articleTitle = parentArticle.dataset.title
    let favorites = JSON.parse(localStorage.getItem('Favoris') || '[]')

    if(favorites.includes(articleTitle)) {
        button.classList.add('Favorite')
        parentArticle.classList.add('FavArticle')
        //parentArticle2.classList.add('FavArticle')
        button.innerHTML = '&starf; Favori'
    }
}

function toggleFav(e) {
    const parentArticle = e.target.closest('article')
    const articleTitle = parentArticle.dataset.title
    //Récupère tous les favs
    let favorites = JSON.parse(localStorage.getItem('Favoris') || '[]')

    if(favorites.includes(articleTitle)) {
        favorites = favorites.filter((f) => f !== articleTitle)
        e.target.classList.remove('Favorite')
        parentArticle.classList.remove('FavArticle')
        //parentArticle2.classList.remove('FavArticle')
        e.target.innerHTML = '&starf; Ajouter aux favs'
    } else {
        favorites.push(articleTitle)
        e.target.classList.add('Favorite')
        parentArticle.classList.add('FavArticle')
        //parentArticle2.classList.add('FavArticle')
        e.target.innerHTML = '&starf;  Favori'

    }

    localStorage.setItem('Favoris', JSON.stringify(favorites))
}

//regarde quand c'est cliqué
for(let i = 0; i < buttons.length; i++) {
    setFav(buttons[i])
    buttons[i].addEventListener('click', (e) => toggleFav(e))
}