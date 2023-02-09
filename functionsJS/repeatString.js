function repeatString(str, repeat) {
  let newStr = ``;
  while (repeat > 0) {
    newStr += str;
    repeat--;
  }

  return newStr;
}
repeatString(`abc`, 3);
