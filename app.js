class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      days: this.selector.querySelector('[data-value="days"]'),
      hours: this.selector.querySelector('[data-value="hours"]'),
      mins: this.selector.querySelector('[data-value="mins"]'),
      secs: this.selector.querySelector('[data-value="secs"]'),
    };

    this.start();
  }

  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;

      if (time <= 0) {
        this.stop();
        this.updateClock(0, 0, 0, 0);
        return;
      }

      const { days, hours, mins, secs } = this.getTimeComponents(time);
      this.updateClock(days, hours, mins, secs);
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  getTimeComponents(time) {
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

    return { days, hours, mins, secs };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  updateClock(days, hours, mins, secs) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = this.addLeadingZero(hours);
    this.refs.mins.textContent = this.addLeadingZero(mins);
    this.refs.secs.textContent = this.addLeadingZero(secs);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2026'),
});