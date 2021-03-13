// elements

const colorName = document.getElementById('rgb-color');
const colors = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
const btnReset = document.getElementById('reset-game');
let count = 0;

window.onload = () => {
  const points = localStorage.getItem('score');
  const counter = localStorage.getItem('counter');
  if (counter) count = Number(counter);
  if (points) {
    score.innerText = points;
  } else {
    score.innerText = count;
  }
};

const chooseColor = (cores) => {
  const index = Math.floor(Math.random() * cores.length);

  colorName.innerText = cores[index];
};

const generateColors = () => {
  const cores = [];
  for (let i = 0; i < colors.length; i += 1) {
    const [firstColor, secondColor, thirdColor] = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];

    const cor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
    console.log(cor);
    cores.push(cor);
    colors[i].style.backgroundColor = cor;
  }
  chooseColor(cores);
};

generateColors();

const countScore = () => {
  count += 3;
  console.log(count);
  score.innerText = count;
  localStorage.setItem('score', count);
  localStorage.setItem('counter', count);
};

const guessColor = (e) => {
  if (e.target.style.backgroundColor === colorName.innerText) {
    answer.innerText = 'Acertou!';
    countScore();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
};

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', guessColor);
}

btnReset.addEventListener('click', () => {
  document.location.reload(true);
});
