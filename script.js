// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function ballColor() {
  const allBalls = document.querySelectorAll('.ball');
  allBalls.forEach((ball) => {
    const ballCollor = ball;
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    ballCollor.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
}

function colorToBeGess() {
  const balls = document.querySelectorAll('.ball');
  const randomPosition = Math.floor(Math.random() * 6);
  const text = document.getElementById('rgb-color');
  const ballColorToBeGuess = balls[randomPosition].style.backgroundColor;
  const hidden = document.getElementById('hidden');
  hidden.innerHTML = ballColorToBeGuess;
  const reg = /\d+/g;
  const textColor = `(${ballColorToBeGuess.match(reg)})`;
  text.innerText = textColor;
}

const ballContainer = document.querySelector('#ball-container');

ballContainer.addEventListener('click', (event) => {
  const hidden = document.getElementById('hidden');
  const answer = document.getElementById('answer');
  const score = document.getElementById('score');
  let newScore = 0;
  const ballSelected = event.target.style.backgroundColor;
  if (ballSelected === hidden.innerText) {
    answer.innerText = 'Acertou!';
    newScore = +score.innerText + 3;
    score.innerText = newScore;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    score.innerHTML = '0';
  }
});

function reset() {
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  ballColor();
  colorToBeGess();
}

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', () => {
  reset();
});
window.onload = function onload() {
  reset();
};
