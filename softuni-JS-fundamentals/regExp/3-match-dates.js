function matchDates(input) {
  let pattern =
    /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/gm;
  let word = input.shift();
  let validDates = word.matchAll(pattern);
  for (const date of validDates) {
    console.log(
      `Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`
    );
  }
}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
