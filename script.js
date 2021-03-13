function geraCor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  let cor = `rgb(${r}, ${g}, ${b})`;

  return cor;
}
const resposta = document.querySelector('#answer');
const bolas = document.querySelectorAll('.ball');
const p = document.querySelector('#rgb-color');
const botaoReset = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function corBolas() {
  for (let index = 0; index < bolas.length; index += 1) {
    let cores = geraCor();
    bolas[index].style.backgroundColor = cores;
  }
}
corBolas();
let contador = 0;

function clicarCorCerta() {
  let bolaCerta = bolas[parseInt(Math.random() * bolas.length)];
  let aCor = window.getComputedStyle(bolaCerta).backgroundColor;
  p.innerHTML = aCor.replace('rgb', '');
  for (let index = 0; index < bolas.length; index += 1) {
    bolas[index].addEventListener('click', function () {
      let ball = window.getComputedStyle(bolas[index]).backgroundColor;
      if (ball === aCor) {
        resposta.innerHTML = 'Acertou!';
      } else {
        resposta.innerHTML = 'Errou! Tente novamente!';
      }
      if (resposta.innerHTML === 'Acertou!') {
        contador += 3;
        score.innerHTML = contador;
        localStorage.setItem('placar', contador);
      }
    });
  }
  window.onload = function () {
    resposta.innerHTML = 'Escolha uma cor';
  };
}
clicarCorCerta();

function botaoReseta() {
  botaoReset.addEventListener('click', function () {
    document.location.reload();
  });
  if (localStorage.length !== 0) {
    score.innerHTML = localStorage.getItem('placar');
    contador = parseInt(localStorage.getItem('placar'));
  } else {
    score.innerHTML = 0;
  }
}

botaoReseta();

// function placar() {
//   let contador = 0;
//   contador = contador + 3;
// }
