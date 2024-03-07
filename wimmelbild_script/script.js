const playButton = document.getElementById('playButton');
const gullsAudio = document.getElementById('gulls');

function TriggerGulls() {
    if (gullsAudio.paused) {
        gullsAudio.play();
        playButton.textContent = 'Pause';
    } else {
        gullsAudio.pause();
        playButton.textContent = 'Play';
    }
}

playButton.addEventListener('click', function() {
    TriggerGulls();
});


$(document).ready(function(){
    setTimeout(TriggerGulls, 2500);
})