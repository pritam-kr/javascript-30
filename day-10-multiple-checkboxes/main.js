const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheckBoxClick);
});


// checkboxes.forEach(checkbox => {
//     // console.log(box);
//     checkbox.addEventListener('keydown', handleShiftPressed);
// });




let previousCheckbox = null;

function handleCheckBoxClick(e) {
    if(e.shiftKey && e.target.checked)  {
        let changeUnChecked = false;
        checkboxes.forEach(checkbox => {
            if(checkbox === e.target || checkbox === previousCheckbox) {
                changeUnChecked = !changeUnChecked;
            }
            if(changeUnChecked) {
                checkbox.checked = true;
            }
        });
    }
    
    else if(e.shiftKey && !e.target.checked) {
        let changeChecked = false;
        checkboxes.forEach(checkbox => {
            if(checkbox === e.target || checkbox === previousCheckbox) {
                changeChecked = !changeChecked;
            }
            if(changeChecked) {
                checkbox.checked = false;
            }
        });
    }
    previousCheckbox = e.target;

}

// function handleShiftPressed(e) {
//     if(e.keyCode === 16) {
//         console.log(e);
        
//         // checkBoxesBetween();
//     }
// }

