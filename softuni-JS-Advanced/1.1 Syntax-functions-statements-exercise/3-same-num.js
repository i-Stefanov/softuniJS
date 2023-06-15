function sameNums(str) {
  let arr = str.toString().split(``);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  if (sum / arr.length === Number(arr[0])) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(sum);
}
sameNums(22222222);
