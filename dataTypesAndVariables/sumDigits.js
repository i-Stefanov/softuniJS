function sumDigits(num) {
  let sum = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    sum += Number(element);
  }
  console.log(sum);
}
sumDigits(245678);
