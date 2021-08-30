
window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
    let keyCode = e.keyCode;
    // console.log(keyCode);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if(audio!==null) {
        // console.log(audio);
        audio.currentTime = 0;
        audio.play();
        const button = document.querySelector(`div.btn[data-key="${keyCode}"]`);
        // console.log(button);
        button.classList.add('play');
        // setTimeout( ()=> {
        //     button.classList.remove('play');
        // },100);
    }
}

const soundButtons = document.querySelectorAll('.btn');
soundButtons.forEach(btn => {
    btn.addEventListener('transitionend', () => {
        btn.classList.remove('play');
    })
});


/* My Implementation */
/*
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
*/

