function loadingBar(num) {
  let completed = `%`.repeat(num / 10);
  let incompleted = `.`.repeat(10 - completed.length);
  if (incompleted.length === 0) {
    console.log(`100% Complete!`);
  } else {
    console.log(`${num}% [${completed}${incompleted}]`);
    console.log(`Still loading...`);
  }
}
