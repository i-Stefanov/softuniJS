function aggregateElements(arr) {
  let newArr = arr.slice();
  console.log(sum(newArr));
  console.log(sumOfInverseValues(newArr));
  console.log(concatArr(newArr));
  function sum(data) {
    let sumOfElements = 0;
    for (let el of newArr) {
      sumOfElements += el;
    }
    return sumOfElements;
  }
  function sumOfInverseValues(data) {
    let sumInverse = 0;
    for (let el of newArr) {
      sumInverse += 1 / el;
    }
    return sumInverse;
  }
  function concatArr(data) {
    let arrStr = newArr.join(``);
    return arrStr;
  }
}
aggregateElements([1, 2, 3]);
