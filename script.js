function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return color;
}

let firstTry;

function genColors() {
  const balls = document.getElementsByClassName('ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomRGB();
  }
  const colorToGuess = balls[Math.floor(Math.random() * balls.length)].style.backgroundColor;
  document.getElementById('rgb-color').innerText = colorToGuess;
  firstTry = true;
}

genColors();
let score = 0;

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    if (document.getElementById('rgb-color').innerText === event.target.style.backgroundColor) {
      document.getElementById('answer').innerText = 'Acertou!';
      if (firstTry) {
        firstTry = false;
        score += 3;
      }
    } else {
      document.getElementById('answer').innerText = 'Errou! Tente novamente!';
      if (firstTry) {
        firstTry = false;
        if (score > 0) {
          score -= 1;
        }
      }
    }
    document.getElementById('score').innerText = score;
  }
});

document.getElementById('reset-game').onclick = function () {
  genColors();
  document.getElementById('answer').innerText = 'Escolha uma cor!';
};
