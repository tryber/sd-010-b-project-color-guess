const ball = document.getElementsByClassName('ball');
let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);


function corBall() {
  for (let i = 0; i < ball.length; i++) {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    ball[i].getElementsByClassName.backgroundcolor = `rbg (${r},${g},${b})`
  }
}