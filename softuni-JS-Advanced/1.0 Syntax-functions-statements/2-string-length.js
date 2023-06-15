function strLength(str1, str2, str3) {
  let strOneL = str1.length;
  let strTwoL = str2.length;
  let strThreeL = str3.length;
  let sum = strOneL + strThreeL + strTwoL;
  let averageLenth = Math.floor(sum / 3);
  console.log(sum);
  console.log(averageLenth);
}
strLength("chocolate", "ice cream", "cake");
