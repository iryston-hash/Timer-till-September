const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const newDate = "01 Sep 2022";


const countDown = () => {
  const currentTime = new Date();
  const newYearsDate = new Date(newDate);
  const timeDifference = (newYearsDate - currentTime) / 1000;

  const days = Math.floor(timeDifference / 3600 / 24);
  const hours = Math.floor(timeDifference / 3600) % 24;
  const minutes = Math.floor(timeDifference / 60) % 60;
  const seconds = Math.floor(timeDifference) % 60;

  daysEl.innerHTML = timeCorrection(days)
  hoursEl.innerHTML = timeCorrection(hours)
  minutesEl.innerHTML = timeCorrection(minutes)
  secondsEl.innerHTML = timeCorrection(seconds)
}; 
function timeCorrection(time) {
    return time < 10 ? `0${time}` : time 
}
countDown();
setInterval(countDown, 1000);
