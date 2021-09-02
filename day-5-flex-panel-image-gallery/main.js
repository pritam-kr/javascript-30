const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', handlePanelClick);
});

panels.forEach(panel => {
    panel.addEventListener('transitionend', handleOpenPanel);
});

function handleOpenPanel(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex') || e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

function handlePanelClick(e) {
    // console.log(e.target);
    console.log(this);
    this.classList.toggle('open');
}

