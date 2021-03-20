const balls = document.querySelectorAll('.ball');
const resetGameBtn = document.querySelector('#reset-game');
const findColorMsg = document.querySelector('#answer');
const ballContainerClick = document.querySelector('#container-ball');
const colorMsgSpan = document.querySelector('#rgb-color');
const scoreSpanMsg = document.querySelector('#score');
let arrayColor = [];
let keepColor = '';
let colorCompare = '';
let ScoreCounter = 0;

const randomNumber1To255 = () => {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const colorToCompare = () => {
  let anyumber = 0;
  anyumber = Math.floor(Math.random() * 6);
  colorCompare = arrayColor[anyumber];
};

const randomPaintBalls = () => {
  arrayColor = [];
  for (let index = 0; index < balls.length; index += 1) {
    const pos = balls[index];
    pos.style.background = randomNumber1To255();
    arrayColor.push(pos.style.background = randomNumber1To255());
    colorToCompare();
  }
  colorCompare = colorCompare.replace(/rgb/gi, '');
  colorMsgSpan.innerHTML = colorCompare;
};

const resetButtom = () => {
  resetGameBtn.addEventListener('click', () => {
    randomPaintBalls();
    findColorMsg.innerHTML = 'Escolha uma cor:';
  });
};

const checkColor = () => {
  keepColor = keepColor.replace(/rgb/gi, '');
  colorCompare = colorCompare.replace(/rgb/gi, '');
  if (keepColor === colorCompare) {
    ScoreCounter += 3;
    findColorMsg.innerHTML = 'Acertou!';
    scoreSpanMsg.innerHTML = `Palacar: ${ScoreCounter}`;
  }
  if (keepColor !== colorCompare) {
    findColorMsg.innerHTML = 'Você Errou!';
  }
};

const ClickBalls = () => {
  ballContainerClick.addEventListener('click', (event) => {
    const EslintChatao = event.target.style.background;
    if (event.target.classList.contains('ball')) {
      keepColor = EslintChatao;
      checkColor();
    }
  });
};

window.onload = () => {
  randomPaintBalls();
  resetButtom();
  ClickBalls();
};
