const balls = document.getElementsByClassName('ball');
const getP = document.querySelector('#answer');
const getButton = document.querySelector('button');
const getBallsDiv = document.getElementById('circle-container');
const goals = document.getElementById('score');
let rgbNumber = '';
let scoreCounter = 0;

function generateRGB() {
  const randomNumber = [];
  for (let x = 0; x < 3; x += 1) {
    randomNumber.push(Math.ceil(Math.random() * (255 - 0) + 0));
  }
  rgbNumber = `(${randomNumber[0]},${randomNumber[1]},${randomNumber[2]})`;
}

function createBalls() {
  for (let x = 0; x < 6; x += 1) {
    getBallsDiv.appendChild(document.createElement('div'));
    getBallsDiv.lastChild.className = 'ball';
  }
}

function colorCircles() {
  for (let x = 0; x < balls.length; x += 1) {
    generateRGB();
    balls[x].style.backgroundColor = (`rgb${rgbNumber}`);
  }
}

function chooseRandomCircle() {
  const chooseCircle = (Math.ceil(Math.random() * (5 - 0) + 0));
  balls[chooseCircle].id = 'rightColor';
}

function getRgbNumber() {
  let rgbText = '';
  const rightColor = document.getElementById('rightColor');
  for (let counter = 3; counter < rightColor.style.backgroundColor.length; counter += 1) {
    rgbText += rightColor.style.backgroundColor[counter];
  }
  document.querySelector('p').innerText = rgbText;
}

function correctOrNot() {
  getBallsDiv.addEventListener('click', (event) => {
    const eventTargetColor = event.target.style.backgroundColor;
    const rightColor = document.getElementById('rightColor').style.backgroundColor;
    if (eventTargetColor === rightColor) {
      getP.innerText = 'Acertou!';
    } else {
      getP.innerText = 'Errou! Tente novamente!';
    }
  });
}

function resetGame() {
  getButton.addEventListener('click', () => {
    colorCircles();
    getRgbNumber();
    document.getElementById('rightColor').id = '';
    getP.innerText = 'Escolha uma cor';
    chooseRandomCircle();
  });
}

function totalScore() {
  getBallsDiv.addEventListener('click', (event) => {
    if (event.target.id === 'rightColor') {
      scoreCounter += 3;
      goals.innerText = scoreCounter;
    }
  });
}

window.onload = function loadPage() {
  resetGame();
  createBalls();
  colorCircles();
  chooseRandomCircle();
  getRgbNumber();
  correctOrNot();
  totalScore();
};
