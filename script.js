let darkmode = document.querySelector ('#darkmode');


darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace ('bx-moon', 'bx-sun');
        document.body.classList.add ('color');
    } else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('color');
    }
};

function slider(anything) {
    // Obtém a referência para o elemento de imagem com o ID 'watchImage'
    let watchImage = document.getElementById('watchImage');
    
    // Atualiza o atributo src da imagem com o ID 'watchImage' para o valor passado para a função
    watchImage.src = anything;
}

function showHomeImage() {
    // Obtém a referência para o elemento de imagem com o ID 'watchImage'
    let watchImage = document.getElementById('watchImage');
    
    // Atualiza o atributo src da imagem para o caminho da imagem original
    watchImage.src = './img/varios-watch.png';
}


let menu = document.querySelector('#menu-icon');
let Links = document.querySelector ('.Links');



menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    Links.classList.toggle ('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    Links.classList.remove('open');
};


function showPopup(text, imageURL) {
    let popup = document.getElementById('popup');
    let popupText = document.getElementById('popup-text');
    let popupImage = document.getElementById('popup-image');

    popup.style.display = 'block';
    popupText.textContent = text;
    popupImage.src = imageURL;
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

