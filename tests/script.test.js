// Importe as funções que você deseja testar
const { slider, showHomeImage, showPopup, closePopup, toggleDarkMode,
  handleMenuClick,
  handleWindowScroll,
  addEventListeners } = require('../scriptFunctions');

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

describe('Testes das funções JavaScript', () => {
  let mockDarkModeElement;
  let mockMenuElement;
  let mockLinksElement;

  beforeEach(() => {
    // Crie elementos simulados para os testes
    mockDarkModeElement = document.createElement('div');
    mockDarkModeElement.id = 'darkmode';
    document.body.appendChild(mockDarkModeElement);

    mockMenuElement = document.createElement('div');
    mockMenuElement.id = 'menu-icon';
    document.body.appendChild(mockMenuElement);

    mockLinksElement = document.createElement('div');
    mockLinksElement.classList.add('Links');
    document.body.appendChild(mockLinksElement);
  });

  afterEach(() => {
    // Remova os elementos após cada teste
    document.body.removeChild(mockDarkModeElement);
    document.body.removeChild(mockMenuElement);
    document.body.removeChild(mockLinksElement);
  });
  
  test('Teste da função toggleDarkMode', () => {
    // Defina a classe inicial para testar a troca de classes
    mockDarkModeElement.classList.add('bx-moon');
    
    // Chame a função
    toggleDarkMode();

    // Verifique se as classes foram alteradas corretamente
    expect(mockDarkModeElement.classList.contains('bx-sun')).toBe(true);
    expect(document.body.classList.contains('color')).toBe(true);

    // Chame a função novamente para testar o fluxo inverso
    toggleDarkMode();

    // Verifique se as classes foram revertidas corretamente
    expect(mockDarkModeElement.classList.contains('bx-moon')).toBe(true);
    expect(document.body.classList.contains('color')).toBe(false);
  });

  test('Teste da função handleMenuClick', () => {
    // Defina um estado inicial para testar a troca de classes
    mockMenuElement.classList.add('bx-x');
    mockLinksElement.classList.add('open');

    // Chame a função
    handleMenuClick();

    // Verifique se as classes foram alteradas corretamente
    expect(mockMenuElement.classList.contains('bx-x')).toBe(false);
    expect(mockLinksElement.classList.contains('open')).toBe(false);

    // Chame a função novamente para testar o fluxo inverso
    handleMenuClick();

    // Verifique se as classes foram revertidas corretamente
    expect(mockMenuElement.classList.contains('bx-x')).toBe(true);
    expect(mockLinksElement.classList.contains('open')).toBe(true);
  });

  test('Teste da função handleWindowScroll', () => {
    // Defina um estado inicial para testar a remoção das classes
    mockMenuElement.classList.add('bx-x');
    mockLinksElement.classList.add('open');

    // Chame a função
    handleWindowScroll();

    // Verifique se as classes foram removidas corretamente
    expect(mockMenuElement.classList.contains('bx-x')).toBe(false);
    expect(mockLinksElement.classList.contains('open')).toBe(false);
  });

  test('Teste da função addEventListeners', () => {
    // Simular os elementos no DOM dos testes
    const mockDarkModeElement = document.createElement('div');
    mockDarkModeElement.id = 'darkmode';
    document.body.appendChild(mockDarkModeElement);
  
    const mockMenuElement = document.createElement('div');
    mockMenuElement.id = 'menu-icon';
    document.body.appendChild(mockMenuElement);
  
    // Criar spies para os métodos addEventListener
    const darkmodeSpy = jest.spyOn(mockDarkModeElement, 'addEventListener');
    const menuSpy = jest.spyOn(mockMenuElement, 'addEventListener');
    const scrollSpy = jest.spyOn(window, 'addEventListener');
  
  
    // Limpar os elementos do DOM dos testes
    document.body.removeChild(mockDarkModeElement);
    document.body.removeChild(mockMenuElement);
  });

});