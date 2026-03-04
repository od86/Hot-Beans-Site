// Updates the current time every minutes
showTime()
setInterval(showTime, 1000);

function showTime() {
  let time = new Date;

  days = formatTime(time.getDate());
  months = formatTime(time.getMonth() + 1);
  fullTime = `${days}/${months}/${time.getFullYear()}`;

  document.querySelector('#date').textContent = fullTime;
}

// Formats time so that it has a 0 in front of it if its single digit
function formatTime(number) {
  if (number < 10) { return `0${number}`; }
  return number;
}