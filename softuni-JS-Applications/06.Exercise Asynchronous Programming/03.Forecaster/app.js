function attachEvents() {
  const btn = document.querySelector("#submit");
  const input = document.querySelector("#location");
  const contentDiv = document.querySelector("#content");
  const forecastSection = document.querySelector("#forecast");
  const currenWeatherDiv = document.querySelector("#current");
  const upcomingWeatherDiv = document.querySelector("#upcoming");
  const conditionIcons = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
    Degrees: "°",
  };
  btn.addEventListener("click", getWeather);
  async function getWeather() {
    try {
      // currenWeatherDiv.replaceChildren();
      const response = await fetch(
        "http://localhost:3030/jsonstore/forecaster/locations"
      );
      if (!response.ok) {
        throw new Error();
      }
      let locations = await response.json();
      const userInput = input.value;

      let wantedLocation = locations.find(
        (location) => location.name === userInput
      );
      const todayForecastRes = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${wantedLocation.code}`
      );
      const todayForecast = await todayForecastRes.json();
      const threeDayForecastRes = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${wantedLocation.code}`
      );

      const threeDayForecast = await threeDayForecastRes.json();
      forecastSection.style.display = "block";

      //clear the previous data before loading the new data
      // Creating elements for current weather forecast
      // Main div
      const divForecasts = document.createElement("div");
      divForecasts.classList.add("forecasts");
      const symbolSpan = document.createElement("span");
      symbolSpan.classList.add("condition", "symbol");
      symbolSpan.textContent = conditionIcons[todayForecast.forecast.condition];
      const conditionSpan = document.createElement("span");
      conditionSpan.classList.add("condition");
      const citySpan = document.createElement("span");
      citySpan.classList.add("forecast-data");
      citySpan.textContent = todayForecast.name;
      const degreesSpan = document.createElement("span");
      degreesSpan.classList.add("forecast-data");
      degreesSpan.textContent = `${todayForecast.forecast.low}${conditionIcons.Degrees}/${todayForecast.forecast.high}${conditionIcons.Degrees}`;
      const conditionWordSpan = document.createElement("span");
      conditionWordSpan.classList.add("forecast-data");
      conditionWordSpan.textContent = todayForecast.forecast.condition;
      conditionSpan.appendChild(citySpan);
      conditionSpan.appendChild(degreesSpan);
      conditionSpan.appendChild(conditionWordSpan);
      divForecasts.appendChild(symbolSpan);
      divForecasts.appendChild(conditionSpan);
      currenWeatherDiv.appendChild(divForecasts);
      //clear fields before loading new data
      // upcomingWeatherDiv.replaceChildren();
      // Creating elements for upcoming weather forecast
      const threeDayDiv = document.createElement("div");

      threeDayForecast.forecast.forEach((day) => {
        threeDayDiv.classList.add("forecast-info");
        const upcomingSpan = document.createElement("span");
        upcomingSpan.classList.add("upcoming");
        const symbolSpan = document.createElement("span");
        symbolSpan.classList.add("symbol");
        symbolSpan.textContent = conditionIcons[day.condition];
        const degreesSpan = document.createElement("span");
        degreesSpan.classList.add("forecast-data");
        degreesSpan.textContent = `${day.low}${conditionIcons.Degrees}/${day.high}${conditionIcons.Degrees}`;
        const citySpan = document.createElement("span");
        citySpan.classList.add("forecast-data");
        citySpan.textContent = day.condition;
        upcomingSpan.appendChild(symbolSpan);
        upcomingSpan.appendChild(degreesSpan);
        upcomingSpan.appendChild(citySpan);
        threeDayDiv.appendChild(upcomingSpan);
      });
      upcomingWeatherDiv.appendChild(threeDayDiv);
    } catch (error) {
      forecastSection.style.display = "block";
      contentDiv.textContent = error;
    }
  }
}

attachEvents();
