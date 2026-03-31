

const targetDate = new Date('Jan 11, 2027');

const timer = document.querySelector('#timer-1');
const daysEl = timer.querySelector('[data-value="days"]');
const hoursEl = timer.querySelector('[data-value="hours"]');
const minsEl = timer.querySelector('[data-value="mins"]');
const secsEl = timer.querySelector('[data-value="secs"]');

function format(value) {
  
  return value < 10 ? '0' + value : value;

}

function updateTimer() {
  const time = targetDate - Date.now();

  if (time <= 0) {
    clearInterval(timerId);

    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minsEl.textContent = '00';
    secsEl.textContent = '00';
    return;
  }

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor(
    (time % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secs = Math.floor(
    (time % (1000 * 60)) / 1000
  );

  daysEl.textContent = days;
  hoursEl.textContent = format(hours);
  minsEl.textContent = format(mins);
  secsEl.textContent = format(secs);
}

const timerId = setInterval(updateTimer, 1000);