function sortByTwoCreteria(arr) {
  let result = arr.sort((a, b) => {
    if (a.length - b.length) {
      return a.length - b.length;
    }
    let lowerA = a.toLowerCase();
    let lowerB = b.toLowerCase();
    if (lowerA < lowerB) {
      return -1;
    }
    if (lowerA > lowerB) {
      return 1;
    }
    return 0;
  });
  console.log(result.join(`\n`));
}
sortByTwoCreteria(["alpha", "beta", "gamma"]);
