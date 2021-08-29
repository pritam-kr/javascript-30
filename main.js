const soundButtons = document.querySelectorAll('.btn');

document.addEventListener('DOMContentLoaded', () => {
    soundButtons.forEach(btn => {
        btn.addEventListener('click', playSound);
        console.log(btn);
    });
})


function playSound(e) {
    let target  = e.target;

    if(target.tagName === 'SPAN') {
        target = target.parentElement;
    }

    const audio = target.firstElementChild;
    audio.play();

    target.classList.add('play');
    
    setTimeout(() => {
        target.classList.remove('play');
    }, 200);
}

