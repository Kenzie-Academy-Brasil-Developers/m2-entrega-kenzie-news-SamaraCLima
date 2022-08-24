const vitrineNews = document.querySelector('.newsKenzie')
class newsRequest { static async ApiAdd() {
        const newsAdd = 'https://kenzie-news-api.herokuapp.com/api/news/'
        await fetch(newsAdd)
            .then((res) => { 
                return res.json()})
            .then((data) => {
                data.forEach(elem => {
                    especs.cards(elem)});
            })
    }
}
class especs{
    static cards(item) {
        const divNoticia = document.createElement('div')
        divNoticia.className = 'divnews'
        const classe = document.createElement('span')
        classe.innerText = item.categoria
        const titulo = document.createElement('h2')
        titulo.innerText = item.titulo
        const img = document.createElement('img')
        img.src = item.imagem
        const desc = document.createElement('p')
        desc.innerText = item.resumo
        const urlnewsnew = document.createElement('a')
        urlnewsnew.innerText = 'Clique Aqui'
        urlnewsnew.href = item.noticia_completa
        divNoticia.append(classe,titulo,img,desc,urlnewsnew)
        vitrineNews.append(divNoticia)}
}
newsRequest.ApiAdd()