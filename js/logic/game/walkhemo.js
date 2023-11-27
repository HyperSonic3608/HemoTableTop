const hemos = document.getElementsByClassName('hemo')

function addMargin(player) {
  players[player].score += 25
  hemos[player].style.marginLeft = `${players[player].score}px`
}

const minLeftMargin = (60 * board.width) / 1920
const minTopMargin = (45 * board.height) / 1080

const randomPosX = [5, 200, 5, 200]
const randomPosY = [3, 110, 33, 140]

var totalPosX = []
var totalPosY = []

const houseWidth = (264 * board.width) / 1920
const houseHeight = (174 * board.height) / 1080

for (let i = 0; i < 4; i++) {
  var scale = (board.width * 0.2) / 3829
  hemos[i].style.transform = `scale(${scale})`
  scale = scale ** -1

  const realHeight = hemos[i].height / scale
  const fakeTopMargin = (hemos[i].height - realHeight) / 2
  totalPosY[i] =
    fakeTopMargin - minTopMargin - (randomPosY[i] * scale ** -1) / 0.2

  hemos[i].style.marginTop = -totalPosY[i] + 'px'

  const realWidth = hemos[i].width / scale
  const fakeLeftMargin = (hemos[i].width - realWidth) / 2
  totalPosX[i] =
    fakeLeftMargin - minLeftMargin - (randomPosX[i] * scale ** -1) / 0.2

  hemos[i].style.marginLeft = -totalPosX[i] + 'px'
}

function movePlayer(player, houses) {
  changePlayer(player)

  let housesLeft = houses,
    actualHouse = players[player].score
  players[player].score += houses

  if (players[player].score >= 7 && players[player].score <= 14) {
    var img = new Image();
    img.src = 'imgs/globinhoLeft.png';
    
    hemos[player].style.transitionDuration = `0.5s`
    hemos[player].src = img.src
  }

  if (players[player].score >= 6 && players[player].score <= 8) {
    totalPosX[player] =
      (hemos[player].width - hemos[player].width / scale) / 2 -
      minLeftMargin -
      (randomPosX[player] * scale ** -1) / 0.2 -
      houseWidth * 6

    if (actualHouse < players[player].score) {
      housesLeft = actualHouse + houses - 6
    } else {
      houseLeft = actualHouse + houses - 8
    }

    hemos[player].style.transitionDuration = `${
      (500 * (6 - actualHouse)) / 1000
    }s`
    move(player, (6 - actualHouse) * 500)

    setTimeout(() => {
      hemos[player].style.transitionDuration = `0.5s`

      setTimeout(() => {
        if (housesLeft < 0) {
          housesLeft = actualHouse + houses - 8
          totalPosY[player] -= housesLeft * houseHeight
        } else {
          totalPosY[player] -= Math.min(housesLeft, 2) * houseHeight
        }
        hemos[player].style.transitionDuration = `${
          (500 * Math.min(housesLeft, 2)) / 1000
        }s`
        move(player, Math.min(housesLeft, 2) * 500)
      }, 500)
    }, (6 - actualHouse) * 500)
  } else if (players[player].score > 8 && players[player].score <= 14) {
    var downHouses
    if (actualHouse <= 6) {
      totalPosX[player] =
        (hemos[player].width - hemos[player].width / scale) / 2 -
        minLeftMargin -
        (randomPosX[player] * scale ** -1) / 0.2 -
        houseWidth * 6

      hemos[player].style.transitionDuration = `0.5s`
      move(player, 500)

      housesLeft = actualHouse + houses - 6
      downHouses = 2
    } else {
      downHouses = Math.max(8 - actualHouse, 0)
    }
    if (actualHouse > 14) {
      if (actualHouse < 17) {
        downHouses = Math.min(14 - actualHouse, 0)
      } else {
        downHouses = -2
        housesLeft = actualHouse - (32 - (actualHouse + houses))
      }
    }

    if (downHouses) {
      hemos[player].style.transitionDuration = `0.5s`
    }
    setTimeout(() => {
      totalPosY[player] -= downHouses * houseHeight
      hemos[player].style.transitionDuration = `${
        (downHouses * 500 * Math.min(housesLeft, 2)) / 1000
      }s`
      move(player, (downHouses + 1) * 500)

      setTimeout(() => {
        housesLeft = housesLeft - downHouses
        console.log(housesLeft)

        hemos[player].style.transitionDuration = `0.5s`
        setTimeout(() => {
          hemos[player].style.transitionDuration = `3s`
          totalPosX[player] += housesLeft * houseWidth
          move(player, 3000)
        }, 500)
      }, (downHouses + 1) * 500)
    }, 500)
  } else if (players[player].score >= 14 && players[player].score <= 16) {
    totalPosX[player] =
      (hemos[player].width - hemos[player].width / scale) / 2 -
      minLeftMargin -
      (randomPosX[player] * scale ** -1) / 0.2

    housesLeft = actualHouse + houses - 14

    hemos[player].style.transitionDuration = `${
      ((14 - actualHouse) * 500) / 1000
    }s`
    move(player, (14 - actualHouse) * 500)

    setTimeout(() => {
      hemos[player].style.transitionDuration = '0.5s'

      setTimeout(() => {
        if (actualHouse < players[player].score) {
          totalPosY[player] -= Math.min(housesLeft, 2) * houseHeight
        } else {
          totalPosY[player] -= (actualHouse + houses - 16) * houseHeight
        }

        hemos[player].style.transitionDuration = `${
          (500 * Math.min(housesLeft, 2)) / 1000
        }s`
        move(player, Math.min(housesLeft, 2) * 500)
      }, 500)
    }, (14 - actualHouse) * 500)
  } else if (players[player].score > 16 && players[player].score < 20) {
    var downHouses
    if (actualHouse < 14) {
      totalPosX[player] =
        (hemos[player].width - hemos[player].width / scale) / 2 -
        minLeftMargin -
        (randomPosX[player] * scale ** -1) / 0.2

      hemos[player].style.transitionDuration = `0.5s`
      move(player, 500)

      housesLeft = actualHouse + houses - 14

      downHouses = 2
    } else {
      downHouses = Math.max(16 - actualHouse, 0)
    }
    setTimeout(() => {
      if (downHouses) {
        hemos[player].style.transitionDuration = `0.5s`
        setTimeout(() => {
          totalPosY[player] -= downHouses * houseHeight
          hemos[player].style.transitionDuration = `${
            (downHouses * 500 * Math.min(housesLeft, 2)) / 1000
          }s`
          move(player, (downHouses + 1) * 500)
        }, 500)
      }

      housesLeft = housesLeft - downHouses

      setTimeout(() => {
        hemos[player].style.transitionDuration = '0.5s'

        setTimeout(() => {
          totalPosX[player] -= housesLeft * houseWidth
          hemos[player].style.transitionDuration = `${
            (500 * housesLeft) / 1000
          }s`
          move(player, housesLeft * 500)
        }, 500)
      }, (downHouses + 2) * 500)
    }, 1000)
  } else if (players[player].score >= 20) {
    totalPosX[player] =
      (hemos[player].width - hemos[player].width / scale) / 2 -
      minLeftMargin -
      (randomPosX[player] * scale ** -1) / 0.2 -
      houseWidth * 5

    totalPosY[player] =
      (hemos[player].height - hemos[player].width / scale) / 2 -
      minTopMargin -
      (randomPosY[player] * scale ** -1) / 0.2 -
      houseHeight * 4

    hemos[player].style.transitionDuration = `${(houses * 500) / 1000}s`
    move(player, houses * 500)
  } else {
    if (actualHouse > 6 && actualHouse <= 8) {
      totalPosY[player] -= houseHeight * (6 - actualHouse)
      housesLeft = housesLeft - (6 - actualHouse)
    }

    totalPosX[player] -= housesLeft * houseWidth
    hemos[player].style.transitionDuration = `${(500 * housesLeft) / 1000}s`

    if (actualHouse > 8) {
      totalPosX[player] =
        (hemos[player].width - hemos[player].width / scale) / 2 -
        minLeftMargin -
        (randomPosX[player] * scale ** -1) / 0.2 -
        houseWidth * players[player].score
      totalPosY[player] -= houseHeight * -2
    }
    move(player, housesLeft * 500)
  }

  hemos[player].style.marginLeft = -totalPosX[player] + 'px'
  hemos[player].style.marginTop = -totalPosY[player] + 'px'
  hemos[player+2].style.marginLeft = -totalPosX[player] + 'px'
  hemos[player+2].style.marginTop = (10 - totalPosY[player]) + 'px'
}

function move(player, time) {
  hemos[player].style.marginLeft = -totalPosX[player] + 'px'
  hemos[player].style.marginTop = -totalPosY[player] + 'px'
  hemos[player+2].style.marginLeft = -totalPosX[player] + 'px'
  hemos[player+2].style.marginTop = (10 -totalPosY[player]) + 'px'

  setTimeout(time)
}