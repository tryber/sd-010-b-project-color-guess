//Gerando os 6 circulos
for(let i = 0; i < 6; i += 1) {
  let bolaDeCor = document.createElement('li');
  bolaDeCor.className = 'ball';
  let paletaDeCores = document.getElementById('paleta-de-cores');
  paletaDeCores.appendChild(bolaDeCor);
}

//Colocando cores nos circulos
function adicionandoCor() {
  let circulos = document.getElementsByClassName('ball');
  for (let i = 0; i < circulos.length; i += 1) {
    circulos[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', '+ Math.floor(Math.random() * 255) + ')';
  }
}

window.onload = adicionandoCor;
