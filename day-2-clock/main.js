
    const hourHand = document.querySelector('.hour-hand');
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    
    function rotateHands() {
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const second = new Date().getSeconds();

        if(second == 0) {
            secondHand.style.transition = "none";
            // secondHand.style.transform = "none"
        }
        else {
            secondHand.style.transition = "transform 0.5s cubic-bezier(0.41, 0.11, 0.46, 1.28)";
        }

        


        const hourAngle = ((hour/ 12) * 360) + 90;
        const minuteAngle = ((minute / 60) * 360) + 90;
        const secondAngle = ((second / 60) * 360) + 90;
        
        secondHand.style.transform = `rotate(${secondAngle}deg)`;
        hourHand.style.transform = `rotate(${hourAngle}deg)`
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    
    }
   
    // document.querySelector('.hour-hand').style.transform = `rotate(75deg)`;

    setInterval(rotateHands, 1000);

    /*
        12 -> 90deg
        11 -> 80deg
        6 -> -90deg
        3 -> 180deg
        9 -> 0 deg

    */