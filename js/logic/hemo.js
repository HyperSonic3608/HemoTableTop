var imgElement = document.getElementsByClassName('hemo')[0]

var img = new Image();
img.src = 'imgs/globinhoRight.png';

function changePlayer(player) {
  imgElement = document.getElementsByClassName('hemo')[player]
  drawImage()
}

function drawImage() {
  imgElement.src = img.src;
}

for (let i = 0; i < 2; i++) {
  changePlayer(i)
}