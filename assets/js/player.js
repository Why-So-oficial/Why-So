
const nomeCapitulo = document.getElementById('capitulo');
const audio = document.getElementById('audio-cap');
const playPauseBtn = document.getElementById('play-pause');
const proximoBtn = document.getElementById('proximo');
const anteriorBtn = document.getElementById('anterior');
const progressAudio = document.querySelector('.progress-audio');
let lenghtArt = (audio.duration/60)
let tocando = false;
let capitulo = 1;

progressAudio.style.width = lenghtArt + '%';

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
audio.addEventListener('ended', tocaOuPausa)
