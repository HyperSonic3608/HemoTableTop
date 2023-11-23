var winner = null

var turn = -1 //Evitando dor de cabeça...

function clearColor() {
  for (let i = 0; i < playerContaier.querySelectorAll('.player').length; i++) {
    const element = playerContaier.querySelectorAll('.player')[i]
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
  const icon = playerContaier.querySelectorAll('.icon')[turn]
  icon.style.backgroundColor = '#ffffff'
  icon.style.borderRadius = '2rem'
  icon.style.animation = 'blink 1.5s linear infinite'; 
  diceBtn.style.marginLeft = `calc(6.4vw + ${(6.4 + 17) * turn}vw)`
  diceBtn.style.display = 'block'
}

turnPlay()
