let ballNumber = '';
let correctValue = '';
let score = 0;

function generateNumber() {
  const number = Math.ceil(Math.random() * 255);
  return number;
}

function generateGuessRGB() {
  const rgbGuess = document.getElementById('rgb-color');
  rgbGuess.innerText = `(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
}

generateGuessRGB();

function generateCorrectBall() {
  ballNumber = Math.ceil(Math.random() * 6);
  const ball = `ball${ballNumber}`;
  const correctBall = document.getElementById(ball);
  correctValue = document.getElementById('rgb-color').innerText;
  correctValue = `rgb${correctValue}`;
  correctBall.style.background = correctValue;
}

generateCorrectBall();

function generateWrongBalls() {
  for (let index = 1; index < 7; index += 1) {
    if (index !== ballNumber) {
      const ball = `ball${index}`;
      const paintBall = document.getElementById(ball);
      const value = `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
      paintBall.style.background = value;
    }
  }
}

generateWrongBalls();

function resetGame() {
  generateGuessRGB();
  generateCorrectBall();
  generateWrongBalls();
  const result = document.getElementById('answer');
  result.innerText = 'Escolha uma cor';
}

document.getElementById('colors-guess').addEventListener('click', (event) => {
  const clickedBall = event.target;
  const chosenColor = clickedBall.style.background;
  const result = document.getElementById('answer');
  const scoreText = document.getElementById('score');
  if (chosenColor === correctValue) {
    result.innerText = 'Acertou!';
    score += 3;
    scoreText.innerText = score;
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
});

document.getElementById('reset-game').addEventListener('click', resetGame);
