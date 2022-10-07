 // Declaração de variáveis:
 const size = document.getElementById('board-size');
 const grid = document.getElementById('pixel-board');
 const container = document.querySelectorAll('#pixel-board');
 const css = document.querySelector(':root');
 let inputSize = size.value;
 let penColor = 'black';
 let corUm = gerarCor();
 let corDois = gerarCor();
 let corTres = gerarCor();

function setColor(cor, valor) {
  css.style.setProperty(`--${cor}`, valor);
}
// Definindo as cores das variáveis do CSS:
setColor('corUm', corUm);
setColor('corDois', corDois);
setColor('corTres', corTres);

function setInputSize(size){
  css.style.setProperty('--inputSize', size);
}
// Chama a função que define o tamanho do grid;
// Condição de criação do grid:
function createGrid() {
  grid.innerText = '';
  if (size.value === '') {
    alert('Board inválido!');
  } else {
    gridSize();
  }
}
// Define o grid, cria os elementos:
function gridSize() {
  if (size.value < 5) {
    inputSize = 5;
  } else if (size.value > 50) {
    inputSize = 50;
  } else {
    inputSize = size.value;
  }
  setInputSize(inputSize);
  const mult = inputSize ** 2;
  for(let i = 0; i < mult; i+= 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.onclick = setPixelColor;
    grid.appendChild(pixel); 
  }
}
gridSize();
function clickBtn() {
  const btn = document.getElementById('board-size');
  btn.addEventListener('click', gridSize);
  css.style.setProperty('--inputSize', inputSize);
}
// Pinta os pixels com a cor definida:
function setPixelColor(pixel) {
  pixel.target.style.backgroundColor = penColor;
  console.log('x', penColor);
}
// Define a cor:
function setPenColor(colorX, pen) {
  penColor = pen;
  setColor(colorX, pen)
}
let pixels = document.querySelectorAll('#pixel-board');
const colors = document.getElementsByClassName('color');

//Função que 'limpa' o grid (cor de fundo fica branca):
function clearBtn(){
  const clearBoard = document.querySelectorAll('.pixel');
  for (let z = 0; z < clearBoard.length; z += 1){
    clearBoard[z].style.backgroundColor = 'white';
  }
}
// Funções para remover/adicionar a classe 'selected':
function rmvSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}
function addSelected(event) {
  event.target.classList.add('selected');
}
// Loop do evento que remove/adiciona o 'selected':
for (let y = 0; y < colors.length; y += 1) {
  colors[y].addEventListener('click', rmvSelected);
  colors[y].addEventListener('click', addSelected);
}
// Função para gerar os valores do RGB aleatoriamente:
function gerarCor(opacidade=1) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}