const colors = document.querySelectorAll('.ball');

function generateColors() {
  const colorPrimary = document.getElementById('rgb-color');

  for (let i = 0; i < colors.length; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  for (let i = 0; i < colors.length; i += 1) {
    const randomColor = colors[Math.floor(Math.random() * i)].style.backgroundColor;

    const replaceRGB = randomColor.replace('rgb', '');

    colorPrimary.innerHTML = replaceRGB;
  }
}

generateColors();

let cont = 0;
// eslint-disable-next-line max-lines-per-function
function guessColor() {
  const initialColor = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  const score = document.getElementById('score');

  for (let i = 0; i < colors.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    colors[i].addEventListener('click', () => {
      initialColor.innerHTML = `rgb${initialColor.innerHTML}`;
      if (colors[i].style.backgroundColor === initialColor.innerHTML) {
        answer.innerHTML = 'Acertou!';
        score.innerHTML = parseFloat(score.innerHTML) + 3;
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
        score.innerHTML = parseFloat(score.innerHTML) - 1;
        if (score.innerHTML < 0) {
          alert('Atualize a página para recomeçar!');
        }
      }
      cont += 1;
      if (cont > 1) {
        alert('Resete o jogo para tentar novamente');
      }
    });
  }
}

guessColor();

function resetGame() {
  const resetButton = document.getElementById('reset-game');
  const answer = document.getElementById('answer');

  resetButton.addEventListener('click', () => {
    generateColors();
    answer.innerHTML = 'Escolha uma cor';
    cont = 0;
  });
}

resetGame();
