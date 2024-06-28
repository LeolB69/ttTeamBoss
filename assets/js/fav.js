const buttons = document.querySelectorAll('button.buttonfav')

function setFav(button) {
    const parentArticle = button.closest('article')
    const articleTitle = parentArticle.dataset.title
    let favorites = JSON.parse(localStorage.getItem('Favoris') || '[]')

    if(favorites.includes(articleTitle)) {
        button.classList.add('Favorite')
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
        e.target.innerHTML = 'Ajouter aux favs'
    } else {
        favorites.push(articleTitle)
        e.target.classList.add('Favorite')
        e.target.innerHTML = 'Favori'

    }

    localStorage.setItem('Favoris', JSON.stringify(favorites))
}

//regarde quand c'est cliqué
for(let i = 0; i < buttons.length; i++) {
    setFav(buttons[i])
    buttons[i].addEventListener('click', (e) => toggleFav(e))
}