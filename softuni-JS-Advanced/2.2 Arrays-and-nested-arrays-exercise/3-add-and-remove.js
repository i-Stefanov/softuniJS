function addAndRemove(arr) {
  let testArr = [];
  let counter = 0;
  for (const command of arr) {
    counter++;
    switch (command) {
      case `add`:
        testArr.push(counter);
        break;
      case `remove`:
        testArr.pop();
        break;

      default:
        break;
    }
  }
  if (testArr.length > 0) {
    console.log(testArr.join(`\n`));
  } else {
    console.log(`Empty`);
  }
}
addAndRemove(["add", "add", "remove", "add", "add"]);
