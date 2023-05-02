function rectangle(width, height, color) {
  color = color.replace(color[0], color[0].toUpperCase());
  let rect = {
    width,
    height,
    color,
    calcArea: () => {
      return rect.width * rect.height;
    },
  };
  console.log(rect.calcArea());
  return rect;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
