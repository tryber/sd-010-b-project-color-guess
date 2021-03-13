function colorPalette() {
  for(let index = 0; index < 6; index += 1) {
  const color = document.createElement('div');
  color.className = 'ball';
  const rgb1 = Math.ceil(Math.random() * 255);
  const rgb2 = Math.ceil(Math.random() * 255);
  const rgb3 = Math.ceil(Math.random() * 255);
  color.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
  document.getElementById('color-palette').appendChild(color);
  }
}

colorPalette();

function rgb() {
    const answer = document.getElementById('rgb-color');
    const colorRgb = document.getElementsByClassName('ball');
    const array = colorRgb[Math.floor(Math.random() * 5)].style.backgroundColor
    answer.innerText = array.split('b')[1];
}

rgb();

function chooseColor () {
  const color = document.getElementsByClassName('ball')
  const answer = document.getElementById('rgb-color')
  const answerText = document.getElementById('answer')
  for(let index = 0; index < 6; index += 1) {
    color[index].addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === `rgb${answer.innerText}`) {
        answerText.innerText = 'Acertou!'
    } else {
        answerText.innerText = 'Errou! Tente novamente!'
    }
    })
  }
}

chooseColor();

function reset() {
    const resetbtn = document.getElementById('reset-game');
    const answerText = document.getElementById('answer');
    const color = document.getElementsByClassName('ball')
    resetbtn.addEventListener('click', function () {
    while (color.length > 0) {
        color[0].parentNode.removeChild(color[0]);
    }
    colorPalette();
    rgb();
    chooseColor();
    score();
    answerText.innerText = 'Escolha uma cor';
    })
}

reset();

function score() {
  const score = document.getElementById('score')
  const color = document.getElementsByClassName('ball');
  const answer = document.getElementById('rgb-color')
  for(let index = 0; index < 6; index += 1) {
    color[index].addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === `rgb${answer.innerText}`) {
        score.innerText = parseInt(score.innerText) + 3;
    } 
    })
  }
}

score();