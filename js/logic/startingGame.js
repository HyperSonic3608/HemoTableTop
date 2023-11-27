const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

var players = [
  {
    score: 0,
    points: 0,
  },
  {
    score: 0,
    points: 0,
  },
]

const playerContaier = document.querySelector('.players')

function updatePlayers() {
  for (let i = 0; i < players.length; i++) {
    playerContaier.querySelectorAll('.score')[i].innerText = players[i].score
  }
}

updatePlayers()