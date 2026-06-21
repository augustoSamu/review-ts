const form = document.querySelector("#custom");
const buttons = document.querySelectorAll(".timer__button");
const endTime = document.querySelector(".display__end-time");
const timerDisplay = document.querySelector(".display__time-left");
let countdown;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = (seconds % 60).toString().padStart(2, "0");
  const display = `${minutes}:${remainderSeconds}`;

  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const adjustedMinute = minutes.toString().padStart(2, "0");
  endTime.textContent = `Be Back At ${adjustedHour}:${adjustedMinute}`;
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const minutes = e.target.minutes.value * 60;
  timer(minutes);

  this.reset();
});
