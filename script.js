let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = time.getUTCMinutes().toString().padStart(2, '0');
  const seconds = time.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
  document.getElementById("display").innerText = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  const lapTime = document.getElementById("display").innerText;
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(lapItem);
}
