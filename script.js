// script.js
let startTime, updatedTime, difference, tInterval;
let running = false;
let elapsed = 0;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    elapsed = 0;
    document.getElementById('display').innerText = "00:00:00";
    document.getElementById('laps').innerHTML = '';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime + elapsed;
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('display').innerText = hours + ":" + minutes + ":" + seconds;
}

function addLap() {
    if (running) {
        let lapTime = document.getElementById('display').innerText;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(lapTime));
        document.getElementById('laps').appendChild(li);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);