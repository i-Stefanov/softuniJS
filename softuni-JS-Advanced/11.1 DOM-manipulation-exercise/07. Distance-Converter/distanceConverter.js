function attachEventsListeners() {
  const inputDistance = document.querySelector(`#inputDistance`);
  let outputDistance = document.querySelector(`#outputDistance`);
  const convertFrom = document.querySelector(`#inputUnits`);
  const convertTo = document.querySelector(`#outputUnits`);
  const convertBtn = document.querySelector(`#convert`);

  const conversionRates = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  convertBtn.addEventListener(`click`, () => {
    const convertFrom = document.querySelector(`#inputUnits`).value;
    const convertTo = document.querySelector(`#outputUnits`).value;
    let valueInMeters = inputDistance.value * conversionRates[convertFrom];
    let convertedValue = valueInMeters / conversionRates[convertTo];
    outputDistance.value = convertedValue;
  });
}
