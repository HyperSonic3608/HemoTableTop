// SELECIONAR ELEMENTOS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let dadoRolando = document.querySelector('#dadoRolando')
const diceBtn = document.querySelector('.diceRoll')

function rollDice() {
  hideDiceButon()
  //Limpando ultimo número sorteado
  imgDado.style.display = 'block'
  imgDado.setAttribute('src', 'imgs/0.png')

  // adicionar a animacao
  imgDado.classList.add('animar')

  // tocar o efeito sonoro
  dadoRolando.play()

  const randNum = getRandomInt(1, 6)

  // usar setTimeout para executar as acoes apos 1.25 segundos
  setTimeout(function () {
    // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
    numeroSorteado = randNum
    // definir atributo src com base no numero
    imgDado.setAttribute('src', 'imgs/' + numeroSorteado + '.png')

    // retirar a animacao
    imgDado.classList.remove('animar')

    movePlayer(turn, houses)
    setTimeout(() => {
      hideDice()
    }, 1180)
    setTimeout(() => {
      callQuestion(players[turn].score)
    }, 4000)
  }, 3900)
  return randNum
}

function hideDice() {
  imgDado.style.display = 'none'
}

function hideDiceButon() {
  diceBtn.style.display = 'none'
}

// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
  min = Math.ceil(min) // arredonda para cima  ceil  = teto
  max = Math.floor(max) // arredonda para baixo floor = piso
  return Math.floor(Math.random() * (max - min + 1)) + min
}