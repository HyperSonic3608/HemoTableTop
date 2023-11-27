var winner = null

var turn = -1 

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
  if (turn == 0) {
    const icon2 = playerContaier.querySelectorAll('.icon')[1];
    icon.style.backgroundColor = '#ffffff'
    icon.style.borderRadius = '2rem'
    icon.style.animation = 'blink 1.5s linear infinite';
    icon2.style.backgroundColor = '#ffffff00';
    icon2.style.animation = 'none';
    diceBtn.style.display = 'block'
  }else{
    const icon2 = playerContaier.querySelectorAll('.icon')[0];
    icon.style.backgroundColor = '#ffffff'
    icon.style.borderRadius = '2rem'
    icon.style.animation = 'blink 1.5s linear infinite';
    icon2.style.backgroundColor = '#ffffff00';
    icon2.style.animation = 'none';
    diceBtn.style.display = 'block'
  }

  
}

turnPlay()
