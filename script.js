const rgbCode = document.getElementById('rgb-color')
const balls = document.querySelectorAll('.ball')
const answer = document.getElementById('answer')
var placar = 0;
const score = document.getElementById('score')

function rgbColor() {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    rgbCode.innerHTML = '('+red+','+green+','+blue+')'
    let pos = [0,1,2,3,4,5]
    pos = shuffle(pos)
    balls[pos[0]].style.backgroundColor = 'rgb('+red+','+green+','+blue+')'
    balls[pos[0]].addEventListener('click', function () {
        answer.innerHTML = 'Acertou!'
        // alert(pos[0])
        placar += 3;
        score.innerHTML = placar
    })
    balls[pos[1]].style.backgroundColor = 'rgb('+green+','+blue+','+red+')'
    balls[pos[1]].addEventListener('click', function () {
        answer.innerHTML = 'Errou! Tente novamente!'
    })
    balls[pos[2]].style.backgroundColor = 'rgb('+blue+','+red+','+green+')'
    balls[pos[2]].addEventListener('click', function () {
        answer.innerHTML = 'Errou! Tente novamente!'
    })
    balls[pos[3]].style.backgroundColor = 'rgb('+red+','+blue+','+green+')'
    balls[pos[3]].addEventListener('click', function () {
        answer.innerHTML = 'Errou! Tente novamente!'
    })
    balls[pos[4]].style.backgroundColor = 'rgb('+green+','+red+','+blue+')'
    balls[pos[4]].addEventListener('click', function () {
        answer.innerHTML = 'Errou! Tente novamente!'
    })
    balls[pos[5]].style.backgroundColor = 'rgb('+blue+','+green+','+red+')'
    balls[pos[5]].addEventListener('click', function () {
        answer.innerHTML = 'Errou! Tente novamente!'
    })
    shuffle(balls)
    answer.innerHTML = 'Escolha uma cor'
    // score.innerHTML = placar
}
rgbColor()

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }