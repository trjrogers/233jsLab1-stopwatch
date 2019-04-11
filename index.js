/*
    Create 3 global variables, isRunning, timer and timerTime.
    Initialize them to false, null and 0 respectively.
*/

var isRunning = false;
var  timer = null;
var timerTime = 0;

function init()
{
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button
    var startButton = document.getElementById("start");
    var stopButton = document.querySelector("#stop");
    var resetButton = document.querySelector("#reset");

    // Add an onclick handler to each of the buttons
    // Use the functions startTimer, stopTimer and resetTimer 
    startButton.onclick = startTimer;
    stopButton.onclick = stopTimer;
    resetButton.onclick = resetTimer;

}


function startTimer() {
    console.log("Start timer.");
    // if the timer is NOT running, start it
    // call the function incrementTimer every second
    // save the timer in a the timer variable
    if (!isRunning) {
        isRunning = true;
        timer = setInterval("incrementTimer()", 1000);
    }
}

function incrementTimer() {
    // increment the timerTime
    // calculate the number of minutes and seconds
    timerTime++;
    var min = Math.floor(timerTime/60);
    var sec = timerTime % 60; 
    
    // write the minutes and seconds to the elements on the page
    // use the function pad to make sure there's a leading 0 if necessary
    document.querySelector("#minutes").innerHTML = pad(min);
    document.querySelector("#seconds").innerHTML = pad(sec);
}

function pad(number) {
    // add a leading 0 if the number is < 10
    if (number < 10)
        number = "0" + number;
    return number;
}

function stopTimer() {
    console.log("Stop timer.");
    // if the timer is running, stop it
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }

}

function resetTimer() {
    console.log("Reset timer.");
    // stop the timer
    stopTimer();
    // set the timerTime back to 0
    timerTime = 0;
    // write 00 to the elements on the page for minutes and seconds
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";
}

// When the page has finished loading, call the function init
window.onload = init;