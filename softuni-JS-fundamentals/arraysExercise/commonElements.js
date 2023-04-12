function commonElements(arr, arr1) {
  for (const el of arr1) {
    if (arr.includes(el)) {
      console.log(el);
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
