
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


function toggleDarkMode() {
    const darkmode = document.querySelector('#darkmode');
    const body = document.body;

    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        body.classList.add('color');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        body.classList.remove('color');
    }
}

// Função para lidar com o clique no ícone de menu
function handleMenuClick() {
    const menu = document.querySelector('#menu-icon');
    const links = document.querySelector('.Links');

    menu.classList.toggle('bx-x');
    links.classList.toggle('open');
}

// Função para lidar com o evento de rolagem da janela
function handleWindowScroll() {
    const menu = document.querySelector('#menu-icon');
    const links = document.querySelector('.Links');

    menu.classList.remove('bx-x');
    links.classList.remove('open');
}

// Adicionar eventos aos elementos correspondentes
function addEventListeners() {
    const darkmode = document.querySelector('#darkmode');
    const menu = document.querySelector('#menu-icon');

    darkmode.addEventListener('click', toggleDarkMode);
    menu.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleWindowScroll);
}

module.exports = {
    slider,
    showHomeImage,
    showPopup,
    closePopup,
    toggleDarkMode,
    handleMenuClick,
    handleWindowScroll,
    addEventListeners
  };