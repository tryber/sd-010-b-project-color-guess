const adivinha = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const resposta = document.querySelector('#answer');
const gameReset = document.querySelector('#reset-game');
const textScore = document.getElementById('score');
let score = 0;

function geraPaleta() {
  const indexColor = (Math.floor(Math.random() * 6));
  for (let index = 0; index < 6; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (index === indexColor) {
      adivinha.innerText = `(${r}, ${g}, ${b})`;
      balls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
      balls[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
}
geraPaleta();

const chosenBall = document.getElementById('color-palette');
chosenBall.addEventListener('click', function (event) {
  const selectedBall = event.target;
  const selectedColor = selectedBall.style.backgroundColor;
  const colorBall = `rgb${adivinha.innerText}`;
  if (selectedColor === colorBall) {
    resposta.innerText = 'Acertou!';
    score += 3;
    textScore.innerText = score;
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  };
})

gameReset.addEventListener('click', function () {
  geraPaleta();
  resposta.innerText = 'Escolha uma cor';
})
