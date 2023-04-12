function palindromeIntegers(arr) {
  for (const element of arr) {
    let stringFromNum = element.toString();

    let reversedString = stringFromNum.split(``);
    let k = reversedString.length - 1;
    for (let i = 0; i < reversedString.length / 2; i++) {
      let temp = reversedString[i];
      reversedString[i] = reversedString[k - i];
      reversedString[k - i] = temp;
    }
    reversedString = reversedString.join(``);
    if (stringFromNum === reversedString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
