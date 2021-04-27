const querySelectorAll = (element) => document.querySelectorAll(element);
const querySelector = (element) => document.querySelector(element);
const getElementById = (element) => document.getElementById(element);

const btnResetGame = getElementById('reset-game');

const guessColor = () => {
  const balls = querySelectorAll('.ball');
  const randomPosition = Math.floor(Math.random() * balls.length);
  const rgbColor = getElementById('rgb-color');
  const rgb = balls[randomPosition].style.backgroundColor;
  const textRGB = rgb.replace('rgb', '');
  rgbColor.innerText = textRGB;
};

const checkBackgroundColor = () => {
  const ball = querySelector('.border');
  if (ball) {
    ball.classList.remove('border');
  }
};

const clickEvent = (event) => {
  const click = event.target;
  checkBackgroundColor();
  click.classList.add('border');
};

const checkColor = (event) => {
  const color = event.target.style.backgroundColor;
  const rgbColor = getElementById('rgb-color');
  const stringRGB = `rgb${rgbColor.innerText}`;
  const text = querySelector('#answer');
  clickEvent(event);
  if (stringRGB === color) {
    text.innerText = 'Acertou!';
  } else {
    text.innerText = 'Errou! Tente novamente!';
  }
};

const ballColor = () => {
  const balls = querySelectorAll('.ball');
  balls.forEach((ball) => {
    const ballStyle = ball;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    ballStyle.style.backgroundColor = `rgb(${r},${g},${b})`;
    ballStyle.addEventListener('click', checkColor);
  });
  guessColor();
};
const start = () => {
  const text = querySelector('#answer');
  text.innerText = 'Escolha uma cor';
};

const reset = () => {
  ballColor();
  start();
};

btnResetGame.addEventListener('click', reset);

window.onload = () => {
  reset();
};
