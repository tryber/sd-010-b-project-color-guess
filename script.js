const getElement = (element) => document.querySelectorAll(element);

const guessColor = () => {
  const balls = getElement('.ball');
  const randomPosition = Math.floor(Math.random() * balls.length);
  const rgbColor = document.getElementById('rbg-color');
  const rgb = balls[randomPosition].style.backgroundColor;
  const textRGB = rgb.replace('rgb', '');
  rgbColor.innerText = textRGB;
};

const checkColor = (event) => {
  const color = event.target.style.backgroundColor;
  const rgbColor = document.getElementById('rbg-color');
  const stringRGB = `rgb${rgbColor.innerText}`;
  if (stringRGB === color) {
    const text = document.querySelector('#answer');
    text.innerText = 'Acertou!';
  }
};

const ballColor = () => {
  const balls = getElement('.ball');
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
  const text = document.querySelector('#answer');
  text.innerText = 'Escolha uma cor';
};
window.onload = () => {
  ballColor();
  start();
};
