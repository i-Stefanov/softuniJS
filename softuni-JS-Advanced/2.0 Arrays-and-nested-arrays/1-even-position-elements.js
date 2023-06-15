function evenPositionElements(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(` `));
}
evenPositionElements(["20", "30", "40", "50", "60"]);
