function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.querySelector(`#inputs > textarea`).value;
    if (input !== ``) {
      let inputArr = JSON.parse(input);

      const bestRestaurantElement = document.querySelector(`#bestRestaurant p`);
      const workersElement = document.querySelector(`#workers p`);
      input = ``;
      let averageSalary = 0;
      let currentAverageSallary = 0;
      let restaurantsObj = {};
      let bestRestaurant = ``;
      let bestSalary = 0;
      for (const restaurantInfo of inputArr) {
        let [restaurantName, workersInfo] = restaurantInfo.split(` - `);
        let workerInfo = workersInfo.split(`, `);
        for (const worker of workerInfo) {
          let [workerName, salary] = worker.split(` `);

          if (!restaurantsObj.hasOwnProperty(restaurantName)) {
            restaurantsObj[restaurantName] = {};
            restaurantsObj[restaurantName][workerName] = salary;
          } else {
            restaurantsObj[restaurantName][workerName] = salary;
          }
        }
      }
      for (const [restaurant, workersObj] of Object.entries(restaurantsObj)) {
        currentAverageSallary =
          Object.values(workersObj)
            .map((x) => Number(x))
            .reduce((sum, value) => sum + value, 0) /
          Object.values(workersObj).length;
        if (currentAverageSallary > averageSalary) {
          averageSalary = Number(currentAverageSallary).toFixed(2);
          bestRestaurant = restaurant;
          bestSalary = Math.max(
            ...Object.values(workersObj).map((x) => Number(x))
          ).toFixed(2);
        }
      }

      let sortedWorkers = Object.fromEntries(
        Object.entries(restaurantsObj[bestRestaurant]).sort(
          (workerA, workerB) => {
            return workerB[1] - workerA[1];
          }
        )
      );

      bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      if (workersElement.textContent === ``) {
        for (const [workerName, salary] of Object.entries(
          restaurantsObj[bestRestaurant]
        )) {
          workersElement.textContent += `Name: ${workerName} With Salary: ${salary} `;
        }
      }
    }
  }
}
