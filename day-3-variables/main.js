const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const paddingVar = rootStyles.getPropertyValue('--image-padding');
const bgColorVar = rootStyles.getPropertyValue('--image-background-color');
const blurVar = rootStyles.getPropertyValue('--image-blur');


const paddingRangeInput = document.querySelector('#range-padding');
const blurRangeInput = document.querySelector('#range-blur');
const bgColorInput = document.querySelector('#bg-color-picker');
const image = document.querySelector('.img');

let padding = paddingRangeInput.value;
let blurVal = blurRangeInput.value;
let bgColor = bgColorInput.value;

// console.log(paddingRangeInput, blurRangeInput, bgColorInput);



blurRangeInput.addEventListener('change', () => {
    blurVal = blurRangeInput.value;
    setStyle();
});

paddingRangeInput.addEventListener('change', () => {
    padding = paddingRangeInput.value;
    setStyle();
});

bgColorInput.addEventListener('input', () => {
    bgColor = bgColorInput.value;
    setStyle();
});

function setStyle() {
    let unit = blurRangeInput.getAttribute('data-sizing');
    image.style.filter = `blur(${blurVal + unit})`;

    unit = paddingRangeInput.getAttribute('data-sizing');
    image.style.padding = `${padding + unit}`;
    
    image.style.backgroundColor = `${bgColor}`;

}




