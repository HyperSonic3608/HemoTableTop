let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let dadoRolando = document.querySelector('#dadoRolando')
const diceBtn = document.querySelector('.diceRoll')

function rollDice() {
  hideDiceButon()
  imgDado.style.display = 'block'
  imgDado.setAttribute('src', 'imgs/0.png')

  imgDado.classList.add('animar')

  dadoRolando.play()

  const randNum = getRandomInt(1, 6)

  setTimeout(function () {
    numeroSorteado = randNum
    imgDado.setAttribute('src', 'imgs/' + numeroSorteado + '.png')

    imgDado.classList.remove('animar')

    movePlayer(turn, houses)
    setTimeout(() => {
      hideDice()
    }, 1180)
    setTimeout(() => {
      callQuestion(players[turn].score)
    }, 2000)
  }, 3900)
  return randNum
}

function hideDice() {
  imgDado.style.display = 'none'
}

function hideDiceButon() {
  diceBtn.style.display = 'none'
}

function getRandomInt(min, max) {
  min = Math.ceil(min) 
  max = Math.floor(max) 
  var rand = Math.floor(Math.random() * (max - min + 1)) + min
  return rand
}