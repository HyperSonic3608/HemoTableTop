const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const playerIcons = ['♠', '♦']
var players = [
  {
    name: urlParams.get('player0'),
    icon: urlParams.getAll('naipe')[0] || 0,
    score: 0,
    points: 0,
  },
  {
    name: urlParams.get('player1'),
    icon: urlParams.getAll('naipe')[1] || 1,
    score: 0,
    points: 0,
  },
]

const playerContaier = document.querySelector('.players')

function updatePlayers() {
  for (let i = 0; i < players.length; i++) {
    playerContaier.querySelectorAll('.score')[i].innerText = players[i].score
    playerContaier.querySelectorAll('.icon')[i].innerText =
      playerIcons[players[i].icon]
    playerContaier.querySelectorAll('.name')[i].innerText = players[i].name
  }
}

updatePlayers()

//Deixando os naipes das cores certas
for (let i = 0; i < players.length; i++) {
  playerContaier.querySelectorAll('.icon')[i].style.color =
    players[i].icon % 2 ? 'red' : 'black'
}