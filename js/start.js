function startGame() {
    document.body.style.setProperty('background-color', 'rgb(0, 0, 0)', 'important');

    var menuElements = document.getElementsByClassName('menuContainer');
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].style.display = 'none';
    }

    var video = document.getElementById('anim1');
    if (video) {
        video.style.display = 'block';
        video.play();

        setTimeout(function() {
            document.body.style.setProperty('background-color', 'rgb(255, 0, 0)', 'important');
            window.location.href = 'game.html';
        }, 13000);
    } else {
        console.error("Vídeo não encontrado");
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.buttons.play');
    if (playButton) {
        playButton.addEventListener('click', startGame);
    }
});