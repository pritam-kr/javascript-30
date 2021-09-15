window.addEventListener('keyup', handleKeyUp);

const pressedKeys = [];
const code = "code";

function handleKeyUp(e) {
    // console.log(e.key);
    pressedKeys.push(e.key);
    pressedKeys.splice(-code.length-1, pressedKeys.length-code.length);
    
    if(pressedKeys.join("").includes(code)) {
        console.log('You entered the code!!');
        cornify_add();
    }
    console.log(pressedKeys)
}
