
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


module.exports = {
    slider,
    showHomeImage,
    showPopup,
    closePopup
  };