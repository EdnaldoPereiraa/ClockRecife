// Importe as funções que você deseja testar
const { slider, showHomeImage, showPopup, closePopup } = require('../scriptFunctions');

describe('Testes das funções JavaScript', () => {
  let imageElement;

  beforeEach(() => {
    // Cria um elemento de imagem simulado para os testes
    imageElement = document.createElement('img');
    imageElement.id = 'watchImage';
    document.body.appendChild(imageElement);
  });

  afterEach(() => {
    // Limpa o elemento de imagem após cada teste
    document.body.removeChild(imageElement);
  });

  test('Teste da função slider', () => {
    const imageURL = 'example.jpg';
    slider(imageURL);
    expect(imageElement.src).toBe(window.location.href + imageURL);
  });

  test('Teste da função showHomeImage', () => {
    showHomeImage();
    expect(imageElement.src).toBe('http://localhost/img/varios-watch.png');
  });
  

  test('Teste da função showPopup', () => {
    const text = 'Exemplo de texto';
    const imageURL = 'popup-image.jpg';
    const popupElement = document.createElement('div');
    popupElement.id = 'popup';
    const popupTextElement = document.createElement('span');
    popupTextElement.id = 'popup-text';
    const popupImageElement = document.createElement('img');
    popupImageElement.id = 'popup-image';
    popupElement.appendChild(popupTextElement);
    popupElement.appendChild(popupImageElement);
    document.body.appendChild(popupElement);

    showPopup(text, imageURL);

    expect(popupElement.style.display).toBe('block');
    expect(popupTextElement.textContent).toBe(text);
    expect(popupImageElement.src).toBe(window.location.href + imageURL);

    document.body.removeChild(popupElement);
  });

  test('Teste da função closePopup', () => {
    const popupElement = document.createElement('div');
    popupElement.id = 'popup';
    document.body.appendChild(popupElement);

    closePopup();

    expect(popupElement.style.display).toBe('none');

    document.body.removeChild(popupElement);
  });
});