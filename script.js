//gerando rgb
let rgb = document.getElementById('rgb-color');
rgb.innerText = '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', '+ Math.floor(Math.random() * 255) + ')';

//Gerando os 6 circulos
for(let i = 0; i < 6; i += 1) {
  let bolaDeCor = document.createElement('li');
  bolaDeCor.className = 'ball';
  let paletaDeCores = document.getElementById('paleta-de-cores');
  paletaDeCores.appendChild(bolaDeCor);
}

//Colocando cores nos circulos
let circulos = document.getElementsByClassName('ball');

function adicionandoCor() {
  for (let i = 0; i < circulos.length; i += 1) {
    circulos[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', '+ Math.floor(Math.random() * 255) + ')';
  }
  let escolhendoCirculoAleatorio = circulos[Math.floor(Math.random() * circulos.length)];
  escolhendoCirculoAleatorio.style.backgroundColor = `rgb${rgb.innerText}`;
}

window.onload = adicionandoCor;
