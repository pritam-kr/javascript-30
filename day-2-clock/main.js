
    const hourHand = document.querySelector('.hour-hand');
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    
    const clockHand = document.querySelector('.clock-hand');
    function rotateHands() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    const secondAngle = (second * 6);
    const minuteAngle = (minute * 6) ;
    const hourAngle = (hour * 30 + minute/2);

        
    
    
    // console.log(secondAngle, second);
    if(second === 0) {
        secondHand.style.transitionDuration = `0s`;
    }
    else {
        secondHand.style.transitionDuration = `0.09s`;
    }
    if(hour === 0 || hour == 12) {
        hourHand.style.transitionDuration = `0s`;
    }
    else {
        hourHand.style.transitionDuration = `0.09s`;
    }
    if(minute === 0) {
        minuteHand.style.transitionDuration = `0s`;
    }
    else {
        minuteHand.style.transitionDuration = `0.09s`;
    }
    
    
    
          
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    
}
   
setInterval(rotateHands, 1000);



    /*

12 hours = 360 deg
1 hour = 30deg
h hours = 30h deg;
60mins = 30deg;
1mins = 1/2 deg;
m mins = m/2 deg

MINUTE
60 mins = 360deg
1 mins = 6deg

60sec = 360deg;
1 sec = 6deg;

*/