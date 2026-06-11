const audio = document.getElementById('BongoAudio');
const play = document.getElementById('playBtn');
const pause = document.getElementById('pauseBtn');
const reset = document.getElementById('resetBtn');

play.addEventListener('click', () => {audio.play()});
pause.addEventListener('click', () => {audio.pause()});
reset.addEventListener('click', () => {audio.currentTime = 0;});
