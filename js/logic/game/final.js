function Ganhar() {
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
    }}
    else{
        var video = document.getElementById('finalverde');
    if (video) {
        video.style.display = 'block';
        video.play();
    } else {
        console.error("Vídeo não encontrado");
    }
    }
};