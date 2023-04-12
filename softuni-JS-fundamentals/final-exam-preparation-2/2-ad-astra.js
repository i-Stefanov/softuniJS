function adAstra(data) {
  let string = data[0];
  let caloriesSum = 0;
  let pattern =
    /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
  let matches = string.matchAll(pattern);
  if (!matches) {
    console.log(`You have food to last you for: 0 days!`);
  }
  let infoArr = [];
  for (let match of matches) {
    let calories = Number(match.groups.calories);
    caloriesSum += calories;
    infoArr.push(
      `Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`
    );
  }
  let daysToEat = Math.floor(caloriesSum / 2000);
  console.log(`You have food to last you for: ${daysToEat} days!`);
  if (daysToEat > 0) {
    for (const line of infoArr) {
      console.log(line);
    }
  }
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
