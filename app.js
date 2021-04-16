

//Selecting every thing

const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const displayHour = document.querySelector(".hour");
const displayMin = document.querySelector(".min");
const displaySec = document.querySelector(".sec");

//Making the time function for setting time
 
function time(){
    const now = new Date();
   
    //Seconds
    const seconds = now.getSeconds();
    const secondsInDegrees = ((seconds / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

    //Minutes
    const  min = now.getMinutes();
    const minInDegrees = ((min / 60) * 360 ) + 90;

    minHand.style.transform = `rotate(${minInDegrees}deg)`;


    // Hours
    const hour = now.getHours();
    const hourInDegrees = ((hour / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${hourInDegrees}deg)`;



    //             DISPLAYING TIME //

    const displayedHour = displayHour.innerHTML = `<h1>${hour} :</h1>`;
    const displayedMin = displayMin.innerHTML =  `<h1>${min} :</h1>`;
    const displayedSec = displaySec.innerHTML = `<h1> ${seconds}</h1>`;

    displayHour.classList.add("display-sec");
    displayMin.classList.add("display-sec");
    displaySec.classList.add("display-sec");
 }

setInterval(time, 1000);



//              ALARM CLOCK

// active 




  

 