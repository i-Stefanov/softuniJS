function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve(areaFunc, volFunc, input) {
  const shapes = JSON.parse(input);
  let output = [];
  shapes.forEach((shape) => {
    let resultObj = {};
    const area = areaFunc.call(shape);
    const volume = volFunc.call(shape);
    resultObj.area = area;
    resultObj.volume = volume;
    output.push(resultObj);
  });
  return output;
}
solve(
  area,
  vol,
  `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);
