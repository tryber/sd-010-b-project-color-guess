function setColor() {
  const colorOne = Math.ceil(Math.random() * 255);
  const colorTwo = Math.ceil(Math.random() * 255);
  const colorThree = Math.ceil(Math.random() * 255);
  return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
}

const divColors = document.querySelector('#div-ball');

function makeColors(numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const balls = document.createElement('div');
    balls.classList.add('ball');
    balls.style.backgroundColor = setColor();
    divColors.appendChild(balls);
  }
}
const numbers = 6;
makeColors(numbers);

const colorSurprise = document.querySelector('#rgb-color');

function surprise() {
  const array = [];
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < numbers; index += 1) {
    array.push(balls[index]);
  }
  let sortNumber = array[Math.floor(Math.random() * (numbers))];
  sortNumber = sortNumber.style.backgroundColor;
  colorSurprise.innerHTML = sortNumber.replace('rgb', '');
}
surprise();

let points = 0;
const score = document.querySelector('#score');

const answer = document.querySelector('#answer');
score.innerHTML = `Placar: ${points}`;
divColors.addEventListener('click', (event) => {
  const choseColor = event.target;
  if (choseColor.style.backgroundColor === `rgb${colorSurprise.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
    points += 3;
    score.innerHTML = `Placar: ${points}`;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    score.innerHTML = `Placar: ${points}`;
  }
});

const resetGame = document.querySelector('#reset-game');
const balls = document.querySelectorAll('.ball');
resetGame.addEventListener('click', () => {
  for (let index = 0; index < balls.length; index += 1) {
    divColors.firstChild.remove();
  }
  makeColors(numbers);
  surprise();
  answer.innerHTML = 'Escolha uma cor';
});
