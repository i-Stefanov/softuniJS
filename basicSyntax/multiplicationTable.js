function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let sum = 0;
    sum = num * i;
    console.log(`${num} X ${i} = ${sum}`);
  }
}
multiplicationTable(5);
