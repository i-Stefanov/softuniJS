function topIntegers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let number1 = arr[i];
    let isLargest = true;
    for (let j = i + 1; j < arr.length; j++) {
      let number2 = arr[j];
      if (number1 <= number2) {
        isLargest = false;
      }
    }
    if (isLargest) {
      newArr.push(number1);
    }
  }
  console.log(newArr.join(` `));
}
topIntegers([1, 4, 3, 2]);
