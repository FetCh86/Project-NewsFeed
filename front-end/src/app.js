import {messages} from './messages.js';
import axios from 'axios';

const ws = new WebSocket("ws://localhost:8888")

ws.onmessage = (message) => {
    console.log(message.data)
}

axios.get('http://127.0.0.1:8080/news')
.then((response) => AfficherArticles(response.data.articles))

function StructurerArticles(info){
    var titre = document.createElement('h2')
    var auteur = document.createElement('p')
    var texteDescription = document.createElement('p')
    var barreSeparation = document.createElement('hr')
    var infoparsee = JSON.parse(info)
    var intituleTitre = document.createTextNode(infoparsee.title)
    titre.appendChild(intituleTitre)
    document.body.appendChild(titre)
    if (infoparsee.author != null){
        var nomAuteur = document.createTextNode(infoparsee.author)
        auteur.appendChild(nomAuteur)
        document.body.appendChild(auteur)
    }
    if (infoparsee.description != null){
        var contenu = document.createTextNode(infoparsee.description)
        texteDescription.appendChild(contenu)
        document.body.appendChild(texteDescription)
    }
    var boutonArticle = document.createElement('input')
    boutonArticle.type = 'button'
    boutonArticle.onclick = window.open(infoparsee.url)
    document.body.appendChild(boutonArticle)
    document.body.appendChild(barreSeparation)
}

function AfficherArticles(tabInfos){
    for (var i = 0; i < tabInfos.length; i++){
        var info = JSON.stringify(tabInfos[i])
        StructurerArticles(info)
    }
}