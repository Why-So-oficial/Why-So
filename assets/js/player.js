//Pega os audios dos podcasts
import songs from "../js/songs.js";

const logoPlayer = document.querySelector('#logo-player');
const previusButton = document.querySelector('#previus-button');
const nextButton = document.querySelector('#next-button');
const playPause = document.querySelector('#playPause');
const timeProgress = document.querySelector('#time-progress');
const progressBar = document.querySelector('.progress-bar');
const timeDuration = document.querySelector('#time-duration');

let index = 0;
function showPodcast(){
    logoPlayer.src = songs[index].photo;
    const audio = new Audio(songs[index].src);
    
    audio.addEventListener('loadedmetadata',() => {
      console.log((audio.duration/60).toFixed(2));
    })
}


//Funcao do Mute e UnMute 
const muteButton = document.querySelector('#mute-button');
let mutedButton = false;

muteButton.addEventListener('click', () => {
    mutedButton = !mutedButton;
    
    // Altera as classes do botão com base no estado de mutedButton
    if (mutedButton) {
        muteButton.classList.remove('bi-volume-up-fill');
        muteButton.classList.add('bi-volume-mute-fill');
    } else {
        muteButton.classList.remove('bi-volume-mute-fill');
        muteButton.classList.add('bi-volume-up-fill');
    }
});


showPodcast();