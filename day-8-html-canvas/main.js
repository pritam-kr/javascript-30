const drawingBoard = document.querySelector('#drawing-board');
const context = drawingBoard.getContext('2d');
drawingBoard.width = window.innerWidth;
drawingBoard.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;

let isDrawing = false; // is someone moving the mouse?
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
    if(isDrawing) {
        console.log(e);
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        context.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;

        hue++;
        if(hue >= 360) hue = 0;
    }

    if(context.lineWidth >=50 || context.lineWidth <=1 ) {
        direction = !direction;
    }
    if(direction) {
        context.lineWidth++;
    }
    else {
        context.lineWidth--;
    }
    
    
}

function handleMouseDown(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function handleMouseUp(e) {
    isDrawing = false;
}



drawingBoard.addEventListener('mousemove', draw);
drawingBoard.addEventListener('mousedown', handleMouseDown);
drawingBoard.addEventListener('mouseup', handleMouseUp);
drawingBoard.addEventListener('mouseout', handleMouseUp); // mouse out of window

