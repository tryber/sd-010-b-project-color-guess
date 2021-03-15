const rgbRandom = document.getElementById('rgb-color');
const backgroundColorBalls = document.getElementsByClassName('ball');
const spanAnswer = document.getElementById('answer');
const balssSection = document.querySelector('.balls-section');
const resetButton = document.getElementById('reset-game');
const spanScore = document.getElementById('score');

function generateRandomColorsBalls() {
  const randomBall = Math.floor(Math.random() * 6, 0);
  for (let index = 0; index < 6; index += 1) {
    const color1 = parseInt(Math.random() * 255, 0);
    const color2 = parseInt(Math.random() * 255, 0);
    const color3 = parseInt(Math.random() * 255, 0);
    if (randomBall === index) {
      rgbRandom.innerHTML = `rgb(${color1}, ${color2}, ${color3})`;
      backgroundColorBalls[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    } else {
      backgroundColorBalls[index].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    }
  }
}
generateRandomColorsBalls();

window.onload = function printAnswer() {
  spanAnswer.innerHTML = 'Escolha uma cor';
};

function verifyCorrectColor() {
  spanScore.innerHTML = 0;
  let score = 0;
  balssSection.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === rgbRandom.innerHTML) {
      spanAnswer.innerHTML = 'Acertou!';
      score += 3;
      spanScore.innerHTML = score;
    } else {
      spanAnswer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
verifyCorrectColor();

function resetGame() {
  resetButton.addEventListener('click', () => {
    generateRandomColorsBalls();
    spanAnswer.innerHTML = 'Escolha uma cor';
  });
}
resetGame();
