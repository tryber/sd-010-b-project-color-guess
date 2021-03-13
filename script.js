const pRGB = document.getElementById('rgb-color');

let pFeedback = document.getElementById('answer');
pFeedback.innerText = 'Escolha uma cor';

function getNumberRandom() {
  return Math.ceil(Math.random() * 255);
}

let rgb = `(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
pRGB.innerText = rgb;

const balls = document.getElementsByClassName('ball');

const score = document.getElementById('score');
let scoreValue = 0;

function setAnswer(ball) {
  pFeedback = document.getElementById('answer');
  pFeedback.innerText = '';
  if (ball.target.style.backgroundColor === `rgb${pRGB.innerText}`) {
    pFeedback.innerText = 'Acertou!';
    scoreValue += 3;
    score.innerText = scoreValue;
  } else {
    pFeedback.innerText = 'Errou! Tente novamente!';
  }
}

let ballSelected = Math.ceil(Math.random() * 6);
console.log(ballSelected);
for (let index = 1; index <= balls.length; index += 1) {
  if (index === ballSelected) {
    balls[index - 1].style.backgroundColor = `rgb${rgb}`;
  } else {
    balls[index - 1].style.backgroundColor = `
    rgb(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
  }
  balls[index - 1].addEventListener('click', setAnswer);
}

/* 6 - Reiniciar jogo */

function resetGame() {
  rgb = `(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
  pRGB.innerText = rgb;

  ballSelected = Math.ceil(Math.random() * 6);
  console.log(ballSelected);
  for (let index = 1; index <= balls.length; index += 1) {
    if (index === ballSelected) {
      balls[index - 1].style.backgroundColor = `rgb${rgb}`;
    } else {
      balls[index - 1].style.backgroundColor = `
      rgb(${getNumberRandom()}, ${getNumberRandom()}, ${getNumberRandom()})`;
    }
    balls[index - 1].addEventListener('click', setAnswer);
  }
  pFeedback = document.getElementById('answer');
  pFeedback.innerText = 'Escolha uma cor';
}
const buttonReset = document.getElementById('reset-game');

buttonReset.addEventListener('click', resetGame);
