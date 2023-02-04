function printNthElement(arr) {
  let step = Number(arr.pop());
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % step === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(` `));
}
printNthElement(["dsa", "asd", "test", "test", "2"]);
