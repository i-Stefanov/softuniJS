function condensedArrays(nums) {
  let condensed = [];
  for (let el of nums) {
    condensed.push(el);
  }
  while (condensed.length > 1) {
    let temp = [];
    for (let i = 0; i < condensed.length - 1; i++) {
      temp[i] = condensed[i] + condensed[i + 1];
    }
    condensed = temp;
  }
  console.log(condensed.join());
}
condensedArrays([5, 0, 4, 1, 2]);
