function attachEventsListeners() {
  const daysInput = document.querySelector(`#days`);
  const hoursInput = document.querySelector(`#hours`);
  const minutesInput = document.querySelector(`#minutes`);
  const secondsInput = document.querySelector(`#seconds`);
  const buttons = Array.from(document.querySelectorAll(`input[type="button"]`));
  const ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };
  function convert(value, unit) {
    let unitsPerUnit = value / ratios[unit];
    return {
      days: unitsPerUnit * ratios.days,
      hours: unitsPerUnit * ratios.hours,
      minutes: unitsPerUnit * ratios.minutes,
      seconds: unitsPerUnit * ratios.seconds,
    };
  }
  buttons.forEach((button) => {
    button.addEventListener(`click`, onConvert);
  });
  function onConvert(event) {
    let input = event.target.parentElement.querySelector(`input[type="text"]`);
    let time = convert(Number(input.value), input.id);
    daysInput.value = time.days;
    hoursInput.value = time.hours;
    minutesInput.value = time.minutes;
    secondsInput.value = time.seconds;
  }
}
