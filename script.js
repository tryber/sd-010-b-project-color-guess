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
    const randomColor = colors[i].style.backgroundColor;

    const replaceRGB = randomColor.replace('rgb', '');

    colorPrimary.innerHTML = replaceRGB;
  }
}

generateColors();

function guessColor() {
  const initialColor = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');

  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', () => {
      initialColor.innerHTML = initialColor.innerHTML.replace('(', 'rgb(');
      if (colors[i].style.backgroundColor === initialColor.innerHTML) {
        answer.innerHTML = 'Acertou!';
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}

guessColor();
