function pieceOfPie(arr, startElement, endElement) {
  let newArr = arr.slice(
    arr.indexOf(startElement),
    arr.indexOf(endElement) + 1
  );
  return newArr;
}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
