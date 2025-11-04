function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light"); 

    //pegar a tag img
    const img = document.querySelector("#profile img");

    
   //substituir a imagem
    if (html.classList.contains("light")) {
    // se tiver light mode. adicionar a imagem light
        img.setAttribute('src', './assets/avatarlightgg.png');
        img.setAttribute('alt', 'Imagem de um cavaleiro medieval na luz do sol ajoelhado sendo empunhalado por uma lança')

    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/NovoAvatar.png');
        img.setAttribute('alt', 'Imagem de um cavaleiro medieval na luz da lua ajoelhado sendo empunhalado por uma lança')
    }
    

}


