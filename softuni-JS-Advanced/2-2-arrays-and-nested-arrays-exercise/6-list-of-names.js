function listOfNames(arr) {
  let newArr = arr.slice();
  let sortednames = newArr.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortednames.length; i++) {
    console.log(`${i + 1}.${sortednames[i]}`);
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
