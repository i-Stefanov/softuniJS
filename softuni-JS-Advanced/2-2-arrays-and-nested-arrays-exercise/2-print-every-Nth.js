function print(arr, elToPrint) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += elToPrint) {
    newArr.push(arr[i]);
  }
  return newArr;
}
print(["5", "20", "31", "4", "20"], 2);
