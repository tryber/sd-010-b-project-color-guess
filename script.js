// elements
const rgbToGuess = document.querySelector('#rgb-color');
const rgbBalls = document.querySelectorAll('.ball');
const answerText = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const scoreCount = document.querySelector('#score');

// Functions

const generateRandomRgb = () => {
  const randomIndex = (Math.floor(Math.random() * 6));
  for (let index = 0; index < 6; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (index === randomIndex) {
      rgbToGuess.innerText = `(${r}, ${g}, ${b})`;
      rgbBalls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
      rgbBalls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
};

const gotRight = () => {
  const newScore = Number(scoreCount.innerText) + 3;
  scoreCount.innerText = newScore;
};

//                      Listeners

// set rgbBall listener
const setRgbBall = () => {
  rgbBalls.forEach((ball) => {
    ball.addEventListener('click', () => {
      const currentBallColor = ball.style.backgroundColor;
      const colorToGuess = `rgb${rgbToGuess.innerText}`;
      if (colorToGuess === currentBallColor) {
        answerText.innerText = 'Acertou!';
        gotRight();
      } else {
        answerText.innerText = 'Errou! Tente novamente!';
      }
    });
  });
};

// set Reset Button

const setResetBtn = () => {
  resetBtn.addEventListener('click', () => {
    generateRandomRgb();
    answerText.innerText = 'Escolha uma cor';
  });
};

// loader
const loadButtons = () => {
  // bts
  setRgbBall();
  setResetBtn();
};
window.onload = () => {
  generateRandomRgb();
  loadButtons();
};
