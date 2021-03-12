window.onload = function (){
// CRIA RGB ALEATORIO
function rndRGB() {
    let str = 'rgb(';
    for(let i = 0; i < 3; i++){
        let rnd = Math.ceil(Math.random()*260);
        str += rnd;
        if(i < 2){
            str += ', ';
        }
    }
    str += ')';
    return (str);
}

//APLICA RGB NO H2
function addTXT (){
    let h2 = document.getElementById('rgb-color');
    h2.innerHTML = rndRGB();
}
addTXT();


// ADD CORES ALEATORIAS PARA BOLAS E A COR DO H2 PARA UMA DAS BOLAS ALEATORIAMENTE
    function addCorBalls() {
        let div = document.getElementById('balls');
        for(let i = 0; i < div.children.length; i++){
            let ball = div.children[i];
            ball.style.backgroundColor = rndRGB();
        }
        let num = Math.floor(Math.random()*(div.children.length));
        ball = div.children[num];
        ball.style.backgroundColor = document.getElementById('rgb-color').innerHTML;
        
    }
addCorBalls ();

// ADD EVENT LISTENER NAS BOLAS
let divBalls = document.getElementById('balls');
for(let i = 0; i < divBalls.children.length; i++){
    divBalls.children[i].addEventListener('click', acerto);
}
function acerto(ballEmQuestao) {
    console.log(ballEmQuestao.target);
    if((document.getElementById('rgb-color').innerHTML) == (ballEmQuestao.target.style.backgroundColor)){
        let txtAcerto = document.getElementById('answer');
        txtAcerto.innerHTML = 'Acertou!';
    }else{
        let txtAcerto = document.getElementById('answer');
        txtAcerto.innerHTML = 'Errou! Tente novamente!';
    }
}


//TEXTO DE ACERTO
let txtAcerto = document.getElementById('answer');
txtAcerto.innerHTML = 'Escolha uma cor:';




}//window blablabla