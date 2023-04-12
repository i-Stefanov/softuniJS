function cutAndReverse(str) {
  let leftHalf = str.substring(0, str.length / 2);
  let rightHalf = str.substring(str.length / 2);
  let reversedLeftHalf = leftHalf.split(``).reverse().join(``);

  let reversedRightHalf = rightHalf.split(``).reverse().join(``);

  console.log(reversedLeftHalf);
  console.log(reversedRightHalf);
}
cutAndReverse(`qwertyu`);
