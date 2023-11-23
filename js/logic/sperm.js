var canvas = document.getElementsByClassName('sperm')[0]
var ctx = canvas.getContext('2d')

const ladoInicial = 250
var lado = ladoInicial

const lado2Inicial = -50
var lado2 = lado2Inicial
var frame = 0
var frameDirection = 1

var tempo

function startAnimation() {
  tempo = setInterval(changeSide, 75)
}

function stopAnimation() {
  clearInterval(tempo)
}

function changePlayer(player) {
  canvas = document.getElementsByClassName('sperm')[player]
  ctx = canvas.getContext('2d')
}

function changeSide() {
  //Quando criei só deus e eu sabia o que tava acontecendo
  //agora só ele sabe
  if (frame >= 300 / 50) {
    frameDirection = -1
  } else if (frame <= 0) {
    frameDirection = 1
  }
  frame = frame + 1 * frameDirection
  lado = ladoInicial - 50 * frame
  lado2 = lado2Inicial + 50 * frame
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ppk()
}

function ppk() {
  //flagelo
  //Linha de cima
  ctx.beginPath()
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 5
  ctx.lineTo(0, (lado + 300) / 4)
  ctx.quadraticCurveTo(100, lado, 195, 95)
  ctx.quadraticCurveTo(300, lado2, 410, 90)

  //Linha de baixo
  ctx.lineTo(410, 120)
  ctx.quadraticCurveTo(295, lado2, 195, 105)
  ctx.quadraticCurveTo(100, lado - 5, 0, (lado + 300) / 4)
  ctx.fillStyle = 'white'
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  //cabecinha
  ctx.beginPath()
  ctx.lineTo(400, 100)
  ctx.quadraticCurveTo(410, 160, 480, 125) //Baixo
  ctx.quadraticCurveTo(525, 100, 480, 75) //Frente
  ctx.quadraticCurveTo(410, 40, 400, 100) //Cima
  ctx.fillStyle = 'white'
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

for (let i = 0; i < 2; i++) {
  changePlayer(i)
  ppk()
}