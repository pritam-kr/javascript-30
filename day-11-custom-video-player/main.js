const player = document.querySelector('.player');
const videoPlayer = document.querySelector('.player_video');

const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress_filled');

const sliders = document.querySelectorAll('.player_slider');
const playButton = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');

let mousedown = false;
 

playButton.addEventListener('click', playPause);
videoPlayer.addEventListener('click', playPause);
videoPlayer.addEventListener('play', updateButton);
videoPlayer.addEventListener('pause', updateButton);
videoPlayer.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', seek);

progress.addEventListener('mousemove', (e) => {
    mousedown && seek(e);

});


progress.addEventListener('mousedown', () => {
    mousedown = true;
});
progress.addEventListener('mouseup', () => {
    mousedown = false;
});

progressFilled.style.flexBasis = 0+"%";

function updateButton(e) {
    if(this.paused) {
        playButton.innerHTML = `<i class="fas fa-play"></i>`;
    }
    else {
        playButton.innerHTML = `<i class="fas fa-pause"></i>`;
    }
}

function playPause(e) {
    if(videoPlayer.paused) {
        videoPlayer.play();
        
    }
    else {
        videoPlayer.pause();
    }
}


skipButtons.forEach(button => {
    button.addEventListener('click', skipVideo);
})
function skipVideo(e) {
    const skipTime = parseInt(e.target.getAttribute('data-skip'));
    const time = videoPlayer.currentTime;

    videoPlayer.currentTime += parseFloat(skipTime);
    /*
    if(skipTime < 0){
        if(Math.abs(skipTime) > time) {
            videoPlayer.currentTime = 0;
        }
        else  {
            videoPlayer.currentTime = videoPlayer.currentTime + skipTime;
        }
    }
    
    else {
        const duration = (videoPlayer.duration);
        if( duration < (time + skipTime)) {
            videoPlayer.currentTime = duration; 
        }
        else {
            console.log(time);
            videoPlayer.currentTime = time + skipTime;
            console.log(videoPlayer.currentTime);
        }
    }
    */
}

sliders.forEach(slider => {
    slider.addEventListener('input', handleSliderUpdate);
});

function handleSliderUpdate() {
    videoPlayer[this.name] = this.value;
    console.log(this.value);
}

function handleProgress() {
    let percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    // console.log(percent, videoPlayer.currentTime, videoPlayer.duration)

    progressFilled.style.flexBasis = `${percent}%`;
}



function seek(e) {
    console.log(e);

    const seekTime = (e.offsetX / progress.offsetWidth) * videoPlayer.duration;

    videoPlayer.currentTime = seekTime;
}

