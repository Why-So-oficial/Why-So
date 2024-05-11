const nomeCapitulo = document.getElementById('capitulo');
const audio = document.getElementById('audio-cap');
const playPauseBtn = document.getElementById('play-pause');
const proximoBtn = document.getElementById('proximo');
const anteriorBtn = document.getElementById('anterior');

const qtdCapitulos = 10;
let tocando = false;
let capitulo = 1;

function tocarFaixa(){
    playPauseBtn.classList.remove('bi-play-circle-fill');
    playPauseBtn.classList.add('bi-pause-circle-fill');
    audio.play();
    tocando = true;
}

function pararFaixa(){
    playPauseBtn.classList.add('bi-play-circle-fill');
    playPauseBtn.classList.remove('bi-pause-circle-fill');
    audio.pause();
    tocando = false;
}

function tocaOuPausa(){
    if(tocando === true){
        pararFaixa();
    } else {
        tocarFaixa();
    }
}


playPauseBtn.addEventListener('click', tocaOuPausa);
proximoBtn.addEventListener('click', proximoCap);
anteriorBtn.addEventListener('click', anteriorCap);

audio.addEventListener('ended', proximoCap);

function anteriorCap(){
    if(capitulo === 1){
        capitulo = qtdCapitulos
    } else {
        capitulo -= 1;
    }

    audio.src = "books/dom-casmurro/" + capitulo + ".mp3"
    nomeCapitulo.innerHTML = "Capitulo " + capitulo;
    tocarFaixa();
}

function proximoCap(){
    if(capitulo < qtdCapitulos){
        capitulo += 1;
    } else {
        capitulo = 1;
    }    
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3"
    nomeCapitulo.innerHTML = "Capitulo " + capitulo;
    tocarFaixa();
}


            
