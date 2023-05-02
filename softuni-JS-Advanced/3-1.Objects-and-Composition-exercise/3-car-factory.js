function carFactory(order) {
  let car = {
    model: order.model,
    engine: {},
    carriage: {},
  };
  let engines = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };
  let carriages = {
    hatchback: {
      type: "hatchback",
      color: order.color,
    },
    coupe: {
      type: "coupe",
      color: order.color,
    },
  };
  car.carriage.type = order.carriage;
  car.carriage.color = order.color;
  if (order.power <= 90) {
    car.engine = engines[`Small engine`];
  } else if (order.power <= 120) {
    car.engine = engines[`Normal engine`];
  } else {
    car.engine = engines[`Monster engine`];
  }
  let size = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
  car.wheels = new Array(4).fill(size);
  return car;
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
