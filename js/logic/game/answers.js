function wrongAnswer() {
    movePlayer(turn, -houses)
    turnPlay()
    setTimeout(() => {
      var video = document.getElementById('anim3');
      if (video) {
        var menuElements = document.getElementsByClassName('players');
        var boardElements = document.getElementsByClassName('boardHolder');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].style.display = 'none';
        }
        for (var i = 0; i < boardElements.length; i++) {
            boardElements[i].style.display = 'none';
        }
          let element = document.body;
          element.style.backgroundColor = 'rgb(0, 0, 0)';
          video.style.display = 'block';
          video.play();
  
          setTimeout(() => {
            video.pause();
            video.style.display = 'none';
            var menuElements = document.getElementsByClassName('players');
            var boardElements = document.getElementsByClassName('boardHolder');
            for (var i = 0; i < menuElements.length; i++) {
              menuElements[i].style.display = 'flex';
            }
            for (var i = 0; i < boardElements.length; i++) {
              boardElements[i].style.display = 'flex';
            }
            let element = document.body;
            element.style.backgroundColor = 'rgb(255, 57, 57)';
          }, 5000);
      } else {
          console.error("Vídeo não encontrado");
      }
    }, 600)
  }
  
  function rightAnswer() {
    if (players[turn].score >= 20) {
      var menuElements = document.getElementsByClassName('players');
        var boardElements = document.getElementsByClassName('boardHolder');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].style.display = 'none';
        }
        for (var i = 0; i < boardElements.length; i++) {
            boardElements[i].style.display = 'none';
        }
      var video = document.getElementById('anim4');
      if (video) {
        let element = document.body;
        element.style.backgroundColor = 'rgb(0, 0, 0)';
          video.style.display = 'block';
          video.play();
          var audio = document.getElementById('music');
          if (audio) {
          audio.pause();
      }
      } else {
          console.error("Vídeo não encontrado");
      }
      setTimeout(() => {
        video.style.display = 'none';
        video.pause();
        Ganhar()
      }, 20000);
      return
    }
    setTimeout(() => {
      var video = document.getElementById('anim2');
      if (video) {
        var menuElements = document.getElementsByClassName('players');
        var boardElements = document.getElementsByClassName('boardHolder');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].style.display = 'none';
        }
        for (var i = 0; i < boardElements.length; i++) {
            boardElements[i].style.display = 'none';
        }
        let element = document.body;
        element.style.backgroundColor = 'rgb(0, 0, 0)';
          video.style.display = 'block';
          video.play();
  
          setTimeout(() => {
            video.pause();
            video.style.display = 'none';
            var menuElements = document.getElementsByClassName('players');
            var boardElements = document.getElementsByClassName('boardHolder');
            for (var i = 0; i < menuElements.length; i++) {
              menuElements[i].style.display = 'flex';
            }
            for (var i = 0; i < boardElements.length; i++) {
              boardElements[i].style.display = 'flex';
            }
              let element = document.body;
              element.style.backgroundColor = 'rgb(255, 57, 57)';
          }, 8000);
      } else {
          console.error("Vídeo não encontrado");
      }
    }, 600)
    turnPlay()
  }