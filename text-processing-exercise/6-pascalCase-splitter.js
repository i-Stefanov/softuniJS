function splitter(str) {
  //   let newArr = [];
  let startIndex = 0;
  let res = str[0];
  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      res += ", " + char;
      //   newArr.push(str.substring(startIndex, i));
      //   startIndex = i;
    } else {
      res += char;
    }
  }
  //   newArr.push(str.substring(startIndex));
  //   console.log(newArr.join(`, `));
}
splitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
