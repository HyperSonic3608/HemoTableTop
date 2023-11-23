var imgElement = document.getElementsByClassName('sperm')[0]

var img = new Image();
img.src = 'imgs/globinhoRight.png';

function changePlayer(player) {
  imgElement = document.getElementsByClassName('sperm')[player]
  drawImage()
}

function drawImage() {
  imgElement.src = img.src;
}

for (let i = 0; i < 2; i++) {
  changePlayer(i)
}