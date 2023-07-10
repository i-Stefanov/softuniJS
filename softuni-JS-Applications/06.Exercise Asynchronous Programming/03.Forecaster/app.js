function attachEvents() {
  const btn = document.querySelector(`#submit`);
  const location = document.querySelector(`#location`).value;
  btn.addEventListener(`click`, getWeather);
  async function getWeather() {
    const response = await fetch(
      `http://localhost:3030/jsonstore/forecaster/locations`
    );
    let locations = await response.json();
    console.log(locations);
  }
}

attachEvents();
