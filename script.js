window.onload = function() {
  colorGeneratorAndToGuess();
}

function colorGeneratorAndToGuess() {
  let circulos = document.getElementsByClassName('ball');
  circulos[Math.floor(Math.random() * 6)].id = 'correct-color';
  for(index = 0; index < circulos.length; index += 1) {
    circulos[index].style.backgroundColor = 'RGB(' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ')';
    if(circulos[index].id === 'correct-color') {
      let corSelecionada = circulos[index].style.backgroundColor;
      let colorToGuess = document.getElementById('rgb-color');
      colorToGuess.innerText = corSelecionada.replace('rgb', "");
    }
  }
}

function answer () {
  let answerText = document.getElementById('answer');
  let circulos = document.getElementById('colored-balls');
  let score = document.getElementById('score');
  circulos.addEventListener('click', function(event) {
    if(event.target.className === 'ball') {
      if(event.target.id === 'correct-color') {
        answerText.innerText = 'Acertou!';
        score.innerText = parseInt(score.innerText) + 3;
      }
      else {
        answerText.innerText = 'Errou! Tente novamente!';
        if(score.innerText != '0') {
          score.innerText = parseInt(score.innerText) - 1;
        }
      }
    }
  })
}

function resetColors() {
  let resetButton = document.getElementById('reset-game');
  let answerText = document.getElementById('answer')
  resetButton.addEventListener('click', function() {
    colorGeneratorAndToGuess();
    answerText.innerText = 'Escolha uma cor';
  })
}

answer();
resetColors();
