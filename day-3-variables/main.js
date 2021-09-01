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

const spanPadding = document.querySelector('.value-padding');
const spanBlur = document.querySelector('.value-blur');
const spanBgColor = document.querySelector('.value-bg-color')

spanPadding.textContent = padding + paddingRangeInput.getAttribute('data-sizing');

spanBlur.textContent = blurVal + blurRangeInput.getAttribute('data-sizing');

spanBgColor.textContent = bgColor;


// console.log(paddingRangeInput, blurRangeInput, bgColorInput);



blurRangeInput.addEventListener('input', () => {
    blurVal = blurRangeInput.value;
    setStyle();
});

paddingRangeInput.addEventListener('input', () => {
    padding = paddingRangeInput.value;
    setStyle();
});

bgColorInput.addEventListener('input', () => {
    bgColor = bgColorInput.value;
    setStyle();
});

function setStyle() {
    let unit = blurRangeInput.getAttribute('data-sizing');
    // image.style.filter = `blur(${blurVal + unit})`;
    root.style.setProperty('--image-blur', (blurVal + unit));

    unit = paddingRangeInput.getAttribute('data-sizing');
    // image.style.padding = `${padding + unit}`;
    root.style.setProperty('--image-padding', (padding + unit));

    root.style.setProperty('--image-background-color', bgColor);

    spanPadding.textContent = rootStyles.getPropertyValue('--image-padding');

    spanBlur.textContent = rootStyles.getPropertyValue('--image-blur');


    spanBgColor.textContent = rootStyles.getPropertyValue('--image-background-color');

}




