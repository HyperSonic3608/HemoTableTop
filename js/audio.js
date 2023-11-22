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
      // Adicione um manipulador de eventos para iniciar a reprodução quando o mouse passar pelos elementos com a classe 'menuContainer'
      var menuContainers = document.getElementsByClassName('menu');
      for (var i = 0; i < menuContainers.length; i++) {
        menuContainers[i].addEventListener('mouseover', function playAudioOnce() {
          audio.play();
          // Remova o manipulador de eventos após a primeira interação
          this.removeEventListener('mouseover', playAudioOnce);
        });
      }
    });
  }
});

var general = localStorage.getItem('general') || 50
var song = localStorage.getItem('song') || 50
var effects = localStorage.getItem('effects') || 50

function updateRanges() {
  generalBar.value = general
  songBar.value = song
  effectsBar.value = effects
}

function changeSongsValue(e) {
  localStorage.setItem(e.name, e.value)
  general = localStorage.getItem('general') || 50
  song = localStorage.getItem('song') || 50
  effects = localStorage.getItem('effects') || 50
  updateSongs()
}

function updateSongs() {
  music.volume = (song / 100) * (general / 100)
  effect.volume = (effects / 100) * (general / 100)
}

updateSongs()
