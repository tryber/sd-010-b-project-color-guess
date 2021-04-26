const getElement = (element) => document.querySelectorAll(element);

const guessColor = () => {
  const balls = getElement('.ball');
  const randomPosition = Math.floor(Math.random() * balls.length);
  const textRGB = document.getElementById('rbg-color');
  const rgb = balls[randomPosition].style.backgroundColor;
  const text = rgb.replace('rgb', '');
  textRGB.innerText = text;
};

const ballColor = () => {
  const balls = getElement('.ball');
  balls.forEach((ball) => {
    const ballStyle = ball;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    ballStyle.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
  guessColor();
};

window.onload = () => {
  ballColor();
};
