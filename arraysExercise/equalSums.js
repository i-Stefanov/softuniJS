function equalSums(arr) {
  let arrL = arr.length;
  let sumBiggerIndex = 0;
  let sumSmallerIndex = 0;
  let isEqual = true;
  for (let i = 1; i < arrL; i++) {
    for (let j = 0; j < i; j++) {
      sumSmallerIndex += arr[j];
    }
    for (let k = arrL - 1; k > i; k--) {
      sumBiggerIndex += arr[k];
    }

    if (sumBiggerIndex != sumSmallerIndex) {
      sumBiggerIndex = 0;
      sumSmallerIndex = 0;
      isEqual = false;
    } else {
      console.log(i);
      isEqual = true;
      break;
    }
  }
  if (!isEqual) {
    console.log(`no`);
  } else if (arr.length == 1) {
    console.log(0);
  }
}
// equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
