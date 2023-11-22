function startGame() {
    var menuElements = document.getElementsByClassName('menu');
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].style.display = 'none';
    }

    var video = document.getElementById('anim1');
    if (video) {
        video.style.display = 'block';
        video.play();

        setTimeout(function() {
            window.location.href = 'game.html';
        }, 13000);
    } else {
        console.error("Vídeo não encontrado");
    }
};