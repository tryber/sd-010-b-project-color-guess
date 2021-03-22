const bola = document.querySelectorAll('.ball');



function corBall() {
  for (let i = 0; i < bola.length; i++) {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    bola[i].style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}
corBall();