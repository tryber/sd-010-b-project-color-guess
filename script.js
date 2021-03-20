const pushColorSpan = document.querySelector('#rgb');
const msgSpan = document.querySelector('#rgb-color');
let scoreSpan = document.querySelector('#score');
const answer = document.querySelector('#answer');

let clickRgb;
let teste = '';
let scoreSpanCount = 0;
scoreSpan.innerHTML = `Placar: ${scoreSpanCount}`;

answer.innerHTML = 'Escolha uma cor';

function rgb() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
let rgbAleatorio;
let getRgbRandom = [];
function btnReset() {
  const cor = document.querySelectorAll('.ball');
  getRgbRandom = [];
  for (let i = 0; i < cor.length; i += 1) {
    const position = cor[i];
    position.style.background = rgb();
    getRgbRandom.push(position.style.background);
  }
  rgbAleatorio = Math.floor(Math.random() * 6);
  teste = getRgbRandom[rgbAleatorio];
  teste = teste.replace(/rgb/gi, '');
  msgSpan.innerHTML = teste;
  answer.innerHTML = 'Escolha uma cor';

}

btnReset();


function getClickRgb () {
  const containerBall = document.querySelector('#containerBall');
  containerBall.addEventListener('click', (event) => {
  event.target.style.backgroundColor;
  clickRgb = event.target.style.backgroundColor;
  clickRgb = clickRgb.replace(/rgb/gi, '');
  console.log(event.target.style.backgroundColor);
  checkClick();
  })
}
getClickRgb  ();

function checkClick() {
  if (clickRgb == teste){
    scoreSpanCount = scoreSpanCount + 3;
   answer.innerHTML = 'Acertou!';
   scoreSpan.innerText = scoreSpanCount;
   console.log('acertei');
 }
  if (clickRgb !== teste){
   answer.innerHTML = 'Errou! Tente novamente!';
   console.log('errei');
 }
}
