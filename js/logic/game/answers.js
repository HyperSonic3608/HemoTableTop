function wrongAnswer() {
    movePlayer(turn, -houses)
    turnPlay()
    setTimeout(() => {
      callOverlay('wrong')
      setTimeout(() => {
        closeOverlay()
      }, 3000)
    }, 600)
  }
  
  function rightAnswer() {
    if (players[turn].score >= 20) {
      callOverlay('win')
      document.getElementById('points').innerText =
        'Pontuação: ' + Math.ceil(players[turn].points)
      document.getElementById('wonPlayer').innerText = players[turn].name
      return
    }
    setTimeout(() => {
      callOverlay('right')
      setTimeout(() => {
        closeOverlay()
      }, 3000)
    }, 600)
    turnPlay()
  }