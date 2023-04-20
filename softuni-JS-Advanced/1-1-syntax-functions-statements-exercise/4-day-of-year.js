function dayOfYear(year, month, day) {
  let fullDate = `${year}-${month}-${day}`;
  let date = new Date(fullDate);
  date.setDate(date.getDate() - 1);

  console.log(
    `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`
  );
}
dayOfYear(2016, 10, 1);
