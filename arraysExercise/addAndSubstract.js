function addAndSubstract(inputArr) {
  let inputL = inputArr.length;
  let sum = 0;
  let sumNew = 0;
  let newArr = [];
  for (let i = 0; i < inputL; i++) {
    let el = inputArr[i];
    sum += el;
    if (el % 2 === 0) {
      el += i;
    } else {
      el -= i;
    }
    newArr.push(el);
    sumNew += el;
  }
  console.log(newArr);
  console.log(sum);
  console.log(sumNew);
}
addAndSubstract([5, 15, 23, 56, 35]);
