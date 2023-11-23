var winner = null

var turn = -1 //Evitando dor de cabeça...

function clearColor() {
  for (let i = 0; i < playerContaier.querySelectorAll('.player').length; i++) {
    const element = playerContaier.querySelectorAll('.player')[i]
    element.style.backgroundColor = '#5bfc8e'
  }
}
var houses

function startPlay() {
  houses = rollDice()
}

function turnPlay() {
  updatePlayers()
  clearColor()

  turn++
  if (turn >= players.length) {
    turn = 0
  }

  const player = playerContaier.querySelectorAll('.player')[turn]
  player.style.backgroundColor = '#00b339'
  diceBtn.style.marginLeft = `calc(6.4vw + ${(6.4 + 17) * turn}vw)`
  diceBtn.style.display = 'block'
}

turnPlay()
