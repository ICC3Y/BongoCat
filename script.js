const audio = document.getElementById('BongoAudio');
const playpause = document.getElementById('playpauseBtn');
const reset = document.getElementById('resetBtn');

playpause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playpause.textContent = 'Pause';
    }
    else {
        audio.pause();
        playpause.textContent = 'Play';

    }
});
reset.addEventListener('click', () => {audio.currentTime = 0;});


