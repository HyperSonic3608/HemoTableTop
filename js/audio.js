const generalBar = document.querySelector('[name="general"]')
const songBar = document.querySelector('[name="song"]')
const effectsBar = document.querySelector('[name="effects"]')

const music = document.querySelector('#music')
const effect = document.querySelector('#dadoRolando')

document.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('music');
  if (audio) {
      audio.play().catch(function(error) {
      console.error("Falha ao reproduzir áudio: ", error);
      document.addEventListener('click', function playAudioOnce() {
        audio.play();
        document.removeEventListener('click', playAudioOnce);
      });
    });
  }
});

document.querySelector('.play').addEventListener('click', function() {
  var audio = document.getElementById('music');
  if (audio) {
      audio.pause();
  }

  var video = document.getElementById('anim1');
  if (video) {
      video.style.display = 'block';
      video.play();

      setTimeout(function() {
          window.location.href = 'game.html';
      }, 13000);
  } else {
      console.error("Vídeo não encontrado");
  }
});

var general = localStorage.getItem('general') || 80
var song = localStorage.getItem('song') || 80
var effects = localStorage.getItem('effects') || 80

function updateRanges() {
  generalBar.value = general
  songBar.value = song
  effectsBar.value = effects
}

function changeSongsValue(e) {
  localStorage.setItem(e.name, e.value)
  general = localStorage.getItem('general') || 80
  song = localStorage.getItem('song') || 80
  effects = localStorage.getItem('effects') || 80
  updateSongs()
}

function updateSongs() {
  music.volume = (song / 100) * (general / 100)
  effect.volume = (effects / 100) * (general / 100)
}

updateSongs()
