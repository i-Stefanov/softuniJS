function autoCompany(input) {
  const cars = {};
  let models = [];
  input.forEach((car) => {
    let [brand, model, carsProduced] = car.split(` | `);
    if (!cars.hasOwnProperty(brand)) {
      cars[brand] = [];
      carsProduced = Number(carsProduced);

      cars[brand].push({ model, carsProduced });
      models.push(model);
    } else {
      if (models.includes(model)) {
        cars[brand].forEach((car) => {
          if (car.model === model) {
            car.carsProduced += Number(carsProduced);
          }
        });
      } else {
        cars[brand].push({ model, carsProduced: Number(carsProduced) });
        models.push(model);
      }
    }
  });
  for (const [brand, carInfo] of Object.entries(cars)) {
    console.log(`${brand}`);
    carInfo.forEach((car) => {
      console.log(`###${car.model} -> ${car.carsProduced}`);
    });
  }
}
autoCompany([
  "Mercedes-Benz | 50PS | 123",
  "Mini | Clubman | 20000",
  "Mini | Convertible | 1000",
  "Mercedes-Benz | 60PS | 3000",
  "Hyunday | Elantra GT | 20000",
  "Mini | Countryman | 100",
  "Mercedes-Benz | W210 | 100",
  "Mini | Clubman | 1000",
  "Mercedes-Benz | W163 | 200",
]);
