/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function defineRandomBackgroundColorBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    const red = getRandomInt(0, 256);
    const green = getRandomInt(0, 256);
    const blue = getRandomInt(0, 256);
    balls[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

const randomNumber = getRandomInt(0, 6);

function setScore() {
  const score = 0;
  sessionStorage.score = score;
}

function getScore() {
  const scoreSaved = sessionStorage.score;
  return scoreSaved;
}

function addScore(score) {
  const scoreSaved = getScore();
  const newScore = parseInt(scoreSaved, 10) + score;
  sessionStorage.score = newScore;
}

function removeScore(score) {
  const scoreSaved = getScore();
  if (parseInt(scoreSaved, 10) > 0) {
    const newScore = parseInt(scoreSaved, 10) - score;
    sessionStorage.score = newScore;
  }
}

function getRgbBallGuessed() {
  const randomIndex = randomNumber;
  const balls = document.querySelectorAll('.ball');
  return balls[randomIndex].style.backgroundColor;
}

function showRgbBallGuessed() {
  const divRgbColor = document.getElementById('rgb-color');
  const rgbBallGuessed = getRgbBallGuessed();
  divRgbColor.innerText = `${rgbBallGuessed.slice(3)}`;
}

function showAnswer() {
  const rgbBallGuessed = getRgbBallGuessed();
  const ballSelected = document.querySelector('.selected');
  const targetBackgroundColor = ballSelected.style.backgroundColor;
  if (targetBackgroundColor === rgbBallGuessed) {
    document.getElementById('answer').innerText = 'Acertou!';
    addScore(3);
    document.getElementById('score').innerText = getScore();
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
    removeScore(1);
    document.getElementById('score').innerText = getScore();
  }
}

function isSelected() {
  const selected = document.querySelector('.selected');
  if (selected === null) return false;
  return true;
}

function addEventClassBall() {
  const balls = document.getElementById('balls-section');
  balls.addEventListener('click', (event) => {
    if (!isSelected()) {
      event.target.classList.add('selected');
      showAnswer();
    }
  });
}
addEventClassBall();

function resetGameOrColors() {
  defineRandomBackgroundColorBalls();
  showRgbBallGuessed();
  if (isSelected()) {
    document.querySelector('.selected').classList.remove('selected');
  }
  document.getElementById('answer').innerText = 'Escolha uma cor';
}

function addEventResetGameBtn() {
  const resetGameBtn = document.getElementById('reset-game');
  resetGameBtn.addEventListener('click', resetGameOrColors);
}
addEventResetGameBtn();

window.onload = () => {
  defineRandomBackgroundColorBalls();
  showRgbBallGuessed();
  setScore();
  document.getElementById('score').innerText = getScore();
};
