function Ganhar() {
    let element = document.body;
    element.style.backgroundColor = 'rgb(248, 53, 4)';
    var audio = document.getElementById('final');
    if (audio) {
          audio.play();
    }
    if (turn == 0) {
        var video = document.getElementById('finalazul');
        if (video) {
            video.style.display = 'flex';
            video.play();
        } else {
            console.error("Vídeo não encontrado");
        }
        callOverlay('win')
        document.getElementById('points').innerText =
        'Pontuação: ' + Math.ceil(players[turn].points)
        document.getElementById('wonPlayer').innerText = 'Azul'
    }
    else{
        var video = document.getElementById('finalverde');
        if (video) {
            video.style.display = 'flex';
            video.play();
        } else {
            console.error("Vídeo não encontrado");
        }
        callOverlay('win')
        document.getElementById('points').innerText =
        'Pontuação: ' + Math.ceil(players[turn].points)
        document.getElementById('wonPlayer').innerText = 'Verde'
    }
};