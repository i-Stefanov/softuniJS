function palindromeIntegers(arr) {
  for (const element of arr) {
    let stringFromNum = element.toString();
    let reversedString = ``;
    for (let i = stringFromNum.length - 1; i >= 0; i--) {
      reversedString += stringFromNum[i];
    }
    reversedString = Number(reversedString);

    if (element === reversedString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
