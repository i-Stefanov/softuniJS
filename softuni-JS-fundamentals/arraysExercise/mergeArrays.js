function mergeArrays(arr, arr1) {
  let arrL = arr.length;
  let arr2 = [];
  for (let i = 0; i < arrL; i++) {
    if (i % 2 == 0) {
      arr[i] = Number(arr[i]);
      arr1[i] = Number(arr1[i]);
      arr2.push(arr[i] + arr1[i]);
    } else {
      arr2.push(arr[i] + arr1[i]);
    }
  }
  console.log(arr2.join(` - `));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
