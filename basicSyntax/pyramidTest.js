function pyramid(base, increment) {
  let circumference = 0;
  let area = 0;
  let totalLapis = 0;
  let totalGold = 0;
  let totalStone = 0;
  let totalMarble = 0;
  let layer = 1;
  let height = 0;
  for (let i = base; i > 0; i -= 2) {
    let stone = 0;
    let marbel = 0;
    let lapis = 0;
    let gold = 0;
    circumference = base * 4;
    area = base * base;
    let outerLAyer = circumference - 4;
    let innerLayer = area - outerLAyer;
    stone = innerLayer * increment;
    marble = outerLAyer * increment;
    if (layer % 5 == 0) {
      marble = 0;
      lapis = outerLAyer * increment;
    }
    layer++;
    if (base < 3) {
      stone = 0;
      marble = 0;
      lapis = 0;
      gold = base * base * increment;
    }
    totalStone += stone;
    totalMarble += marble;
    totalLapis += lapis;
    totalGold = gold;
    height += increment;

    base -= 2;
  }
  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
  console.log(`Gold required: ${Math.ceil(totalGold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
// pyramid(11, 1);
pyramid(11, 0.75);

// console.log(
//   ` i = ${i} Layer: ${layer} Stone: ${stone} Marbel: ${marbel} Lapis: ${lapis} Gold: ${gold}  Base: ${base}`
// );
