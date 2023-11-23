var canvas = document.getElementsByClassName('sperm')[0]
var ctx = canvas.getContext('2d')

var img = new Image();
img.src = 'imgs/globinhoRight.png';

function changePlayer(player) {
  canvas = document.getElementsByClassName('sperm')[player]
  ctx = canvas.getContext('2d')
  drawImage()
}

function drawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

for (let i = 0; i < 2; i++) {
  changePlayer(i)
}