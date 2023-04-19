function dayOfYear(year, month, day) {
  let date = new Date(year, month, day);
  date.setDate(date.getDate() - 1);

  console.log(
    `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`
  );
}
dayOfYear(2016, 10, 1);
