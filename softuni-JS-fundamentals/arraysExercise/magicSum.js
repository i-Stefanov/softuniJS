function magicSum(arr, num) {
  let magicNums = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j != i && j > i) {
        sum = arr[i] + arr[j];
        if (sum === num) {
          console.log(`${arr[i]} ${arr[j]}`);
        }
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
