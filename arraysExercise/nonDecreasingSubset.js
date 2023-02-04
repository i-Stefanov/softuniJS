function nonDecreasinSubset(arr) {
  let newArr = [];
  let currentBggest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= currentBggest) {
      newArr.push(arr[i]);
      currentBggest = arr[i];
    }
  }
  console.log(newArr.join(` `));
}

nonDecreasinSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
