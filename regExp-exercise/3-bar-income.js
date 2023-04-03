function barIncome(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<item>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+.*\d*)\$/gm;

  let totalIncome = 0;
  let info = input.shift();
  while (info !== "end of shift") {
    let matches = info.matchAll(pattern);

    for (const match of matches) {
      let totalPriceForPerson =
        Number(match.groups.quantity) * Number(match.groups.price);
      totalIncome += totalPriceForPerson;
      console.log(
        `${match.groups.name}: ${Number(
          match.groups.item
        )} - ${totalPriceForPerson.toFixed(2)}`
      );
    }
    info = input.shift();
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
