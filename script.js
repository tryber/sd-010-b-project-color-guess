//gerando rgb
let rgb = document.getElementById('rgb-color');
rgb.innerText = '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', '+ Math.floor(Math.random() * 255) + ')';

//Gerando os 6 circulos
for(let i = 0; i < 6; i += 1) {
  let bolaDeCor = document.createElement('li');
  bolaDeCor.className = 'ball';
  bolaDeCor.classList.add('errado');
  let paletaDeCores = document.getElementById('paleta-de-cores');
  paletaDeCores.appendChild(bolaDeCor);
}

//Colocando cores nos circulos
let circulos = document.getElementsByClassName('ball');
let escolhendoCirculoAleatorio = circulos[Math.floor(Math.random() * circulos.length)];

function adicionandoCor() {
  for (let i = 0; i < circulos.length; i += 1) {
    circulos[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', '+ Math.floor(Math.random() * 255) + ')';
  } 
  escolhendoCirculoAleatorio.classList.remove('errado');
  escolhendoCirculoAleatorio.style.backgroundColor = `rgb${rgb.innerText}`;
  escolhendoCirculoAleatorio.id = 'answer'
}
adicionandoCor();

//escolhendo a cor certa
let resultado = document.getElementById('resultado');
let corCerta = document.getElementById('answer');
let corErrada = document.getElementsByClassName('errado');
let todasAsBolas = document.getElementsByClassName('ball');

corCerta.addEventListener('click', function() {
  resultado.innerText = 'Acertou!';
});

for(let i = 0; i < corErrada.length; i += 1) {
  corErrada[i].addEventListener('click', function() {
    resultado.innerText = 'Errou! Tente novamente!';
  });
};

function bordaBolaSelecionada(event) {
  for(let i = 0; i < todasAsBolas.length; i += 1) {
    if(todasAsBolas[i].classList.contains('selected')) {
      todasAsBolas[i].classList.remove('selected')
    } else {
      event.target.classList.add('selected');
    }
  }
}

for(let i = 0; i < todasAsBolas.length; i += 1) {
  todasAsBolas[i].addEventListener('click', bordaBolaSelecionada);
}







