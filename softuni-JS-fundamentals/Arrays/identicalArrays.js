function identicalArrays(arr, arr1) {
  let sum = 0;
  let isEqual = true;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    arr1[i] = Number(arr1[i]);
    if (arr[i] === arr1[i]) {
      sum += arr[i];
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isEqual = false;
      break;
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

// reverseInPlace(["a", "b", "c", "d", "e"]);
identicalArrays(
  ["1", "2", "3", "4", "5", "6", "7"],
  ["1", "2", "3", "4", "5", "6", "7"]
);
