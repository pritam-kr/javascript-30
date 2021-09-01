// root element to access CSS variables
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

// References to CSS variables
const paddingVar = rootStyles.getPropertyValue('--image-padding');
const bgColorVar = rootStyles.getPropertyValue('--image-background-color');
const blurVar = rootStyles.getPropertyValue('--image-blur');

// Form input control references
const paddingRangeInput = document.querySelector('#range-padding');
const blurRangeInput = document.querySelector('#range-blur');
const bgColorInput = document.querySelector('#bg-color-picker');

// Default values in input controls
let padding = paddingRangeInput.value;
let blurVal = blurRangeInput.value;
let bgColor = bgColorInput.value;

// Units of padding and blur
let paddingUnit =  paddingRangeInput.getAttribute('data-sizing');
let blurUnit = blurRangeInput.getAttribute('data-sizing');

// Setting default values of CSS variables
root.style.setProperty('--image-blur', (blurVal + blurUnit));
root.style.setProperty('--image-padding', (padding + paddingUnit));
root.style.setProperty('--image-background-color', bgColor);


// Reference to span that displays current padding, blur and bg Color
const spanPadding = document.querySelector('.value-padding');
const spanBlur = document.querySelector('.value-blur');
const spanBgColor = document.querySelector('.value-bg-color')

// Setting content of padding, blur and bg color
spanPadding.textContent = padding + paddingUnit;
spanBlur.textContent = blurVal + blurUnit;
spanBgColor.textContent = bgColor;

// input events for form controls
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


// Setting style on change of input contol values
function setStyle() {
    root.style.setProperty('--image-blur', (blurVal + blurUnit));

    root.style.setProperty('--image-padding', (padding + paddingUnit));

    root.style.setProperty('--image-background-color', bgColor);

    spanPadding.textContent = rootStyles.getPropertyValue('--image-padding');
    spanBlur.textContent = rootStyles.getPropertyValue('--image-blur');
    spanBgColor.textContent = rootStyles.getPropertyValue('--image-background-color');

}




