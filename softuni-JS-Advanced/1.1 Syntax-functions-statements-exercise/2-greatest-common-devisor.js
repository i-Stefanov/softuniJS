function greatestCD(firtstNum, secondNum) {
  firtstNum = Number(firtstNum);
  secondNum = Number(secondNum);
  while (firtstNum !== secondNum) {
    if (firtstNum > secondNum) {
      firtstNum -= secondNum;
    } else {
      secondNum -= firtstNum;
    }
  }
  console.log(firtstNum);
}
greatestCD(5, 15);
