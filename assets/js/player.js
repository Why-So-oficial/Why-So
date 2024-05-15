//Pega os audios dos podcasts
import songs from "../js/songs.js";

const player = document.querySelector('#player')
const logoPlayer = document.querySelector('#logo-player');
const previousBtn = document.querySelector('#previus-button');
const nextBtn = document.querySelector('#next-button');
const playPause = document.querySelector('#playPause');
const timeProgress = document.querySelector('#time-progress');
const progressBar = document.querySelector('.progress-bar');
const timeDuration = document.querySelector('#time-duration');
const nameCap = document.querySelector('.name-cap')


let index = 0;
const audio = new Audio(songs[index].src);

function showPodcast(){
    audio.src = songs[index].src;
    nameCap.innerHTML = songs[index].name;
    logoPlayer.src = songs[index].photo;

    
    
    audio.addEventListener('loadedmetadata',() => {
        
        const formatMinute = Math.floor(audio.duration/60)
        const formatSecond = Math.floor(audio.duration%60)
        const formatDuration = formatMinute + ":" + formatSecond
        timeDuration.innerHTML =  formatDuration;
    })
}
showPodcast();


//Funcao do Mute e UnMute 
const muteButton = document.querySelector('#mute-button');
let mutedButton = false;

muteButton.addEventListener('click', () => {
    mutedButton = !mutedButton;
    
    // Altera as classes do botão com base no estado de mutedButton
    if (mutedButton) {
        muteButton.classList.remove('bi-volume-up-fill');
        muteButton.classList.add('bi-volume-mute-fill');
        audio.volume = 0;
    } else {
        muteButton.classList.remove('bi-volume-mute-fill');
        muteButton.classList.add('bi-volume-up-fill');
        audio.volume = 1;
    }
});



const qtdCapitulos = songs.length;

let playing = false;


function playSong(){
    playPause.classList.remove('bi-play-circle-fill');
    playPause.classList.add('bi-pause-circle-fill');
    nameCap.classList.add('activeSlide');
    audio.play();
    playing = true;
}

function stopSong(){

    playPause.classList.add('bi-play-circle-fill');
    playPause.classList.remove('bi-pause-circle-fill');

    nameCap.classList.remove('activeSlide');
    audio.pause();
    playing = false;
}

function stopOrPlay(){
    if(!playing === true){
        playSong();
    } else {
        stopSong();
    }
}


playPause.addEventListener('click', stopOrPlay);
nextBtn.addEventListener('click', nextCap);
previousBtn.addEventListener('click', previousCap);

audio.addEventListener('ended', nextCap);

function previousCap(){
    if(index === 0){
        index = qtdCapitulos;
    }
    index--;
    
    audio.src = songs[index].src;
    nameCap.innerHTML = songs[index].name;
    logoPlayer.src = songs[index].photo;
    playSong();
}

function nextCap(){
    index++
    if(index >= qtdCapitulos){
        index = 0
    }

    audio.src = songs[index].src;
    nameCap.innerHTML = songs[index].name;
    logoPlayer.src = songs[index].photo;
    playSong();
}

function updateTime(){
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    timeProgress.textContent = currentMinutes + ":" + formatZero(currentSeconds);
       
    const progressWidth = (audio.currentTime / audio.duration) * 100;

    progressBar.style.width = progressWidth + "%";

    //Criacao de mudar o tempo quando clicar
    const progress = document.querySelector('.progress');
    progress.addEventListener('click',(e) => {
      
        const newTime = (e.offsetX / progress.offsetWidth) * audio.duration;
        audio.currentTime = newTime;
    })
    
};

audio.ontimeupdate = updateTime;

function formatZero(n){
    if(n < 10){
        return "0"+n;
    }
    return n; 
}

const arrow = document.querySelector('#arrow');
arrow.addEventListener('click',() => {
  player.classList.toggle('activePlayer');
  arrow.classList.toggle('activePlayer');

  if(!arrow.classList.contains('activePlayer')){
    arrow.classList.remove('activePlayer');
    arrow.style.bottom = '90px'

    
  }else{
    arrow.classList.add('activePlayer');

   const widthClient =  ()=>{
    if(window.offsetWidth < 999){
        return '240px'
    }else{
        return '100px'
    }
   }
   arrow.style.bottom =  widthClient;

  }
})

