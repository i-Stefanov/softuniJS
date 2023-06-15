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
      let workersInfoToPrint = ``;
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
            restaurantsObj[restaurantName][workerName] = Number(salary);
          } else {
            restaurantsObj[restaurantName][workerName] = Number(salary);
          }
        }
      }
      for (const [restaurant, workersObj] of Object.entries(restaurantsObj)) {
        let currentAverageSallary =
          Object.values(workersObj).reduce(
            (sum, value) => sum + Number(value),
            0
          ) / Object.values(workersObj).length;
        if (currentAverageSallary > averageSalary) {
          averageSalary = Number(currentAverageSallary);
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
      console.log(sortedWorkers);
      bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(
        2
      )} Best Salary: ${bestSalary}`;

      for (const [workerName, salary] of Object.entries(sortedWorkers)) {
        workersInfoToPrint += `Name: ${workerName} With Salary: ${salary} `;
      }
      workersElement.textContent = workersInfoToPrint;
    }
  }
}
