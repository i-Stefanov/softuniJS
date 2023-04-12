function addAndRemove(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === `add`) {
      newArr.push(i + 1);
    } else {
      newArr.pop();
    }
  }
  console.log(newArr.join(` `));
}
addAndRemove(["add", "add", "remove", "add", "add"]);
