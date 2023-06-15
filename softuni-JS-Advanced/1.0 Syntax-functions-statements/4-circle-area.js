function circleArea(arg) {
  let argType = typeof arg;

  if (argType === `number`) {
    let area = Math.pow(arg, 2) * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${argType}.`
    );
  }
}
circleArea(5);
