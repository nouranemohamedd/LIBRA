let timerElement = document.getElementById('timer');
let progressElement = document.getElementById('progress');
let time = 3; // 1:59 in seconds
let totalTime = time;
let circumference = 2 * Math.PI * 45; // Circumference of the circle
progressElement.style.strokeDasharray = circumference;

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    let progress = time / totalTime * circumference;
    progressElement.style.strokeDashoffset = circumference - progress;

    if (time > 0) {
        time--;
    } else {
        clearInterval(timerInterval);
        showTimeoutMessage();
    }
}

function showTimeoutMessage() {
    let timeoutMessage = document.getElementById('timeout-message');
    timeoutMessage.style.display = 'block';
}

document.getElementById('yes-button').addEventListener('click', () => {
    // You can reset the timer here or handle the "Yes" button click as needed
    console.log('Continue chatting');
});

let timerInterval = setInterval(updateTimer, 1000);

updateTimer(); // Initial call to set the timer text immediately
