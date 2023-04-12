function pyramid(base, increment) {
  let circumference = 0;
  let area = 0;
  let totalLapis = 0;
  let totalGold = 0;
  let totalStone = 0;
  let totalMarbel = 0;
  let layer = 0;
  let height = 0;
  while (base >= 1) {
    let stone = 0;
    let marbel = 0;
    let lapis = 0;
    let gold = 0;
    circumference = base * 4;
    area = base * base;
    let outerLAyer = circumference - 4;
    let innerLayer = area - outerLAyer;
    stone = innerLayer * increment;
    marbel = outerLAyer * increment;
    if (layer % 5 == 0) {
      marbel = 0;
      lapis = outerLAyer * increment;
    }
    layer++;
    if (base < 3) {
      stone = 0;
      marbel = 0;
      lapis = 0;
      gold = base * base * increment;
    }
    totalStone += stone;
    totalMarbel += marbel;
    totalLapis += lapis;
    totalGold = gold;
    height = Math.floor(layer * increment);

    base -= 2;
  }
}
// console.log(
//   `Layer: ${layer} Stone: ${stone} Marbel: ${marbel} Lapis: ${lapis} Gold: ${gold}  Base: ${base}`
// );
//   console.log(`Stone required: ${Math.ceil(totalStone)}`);
//   console.log(`Marbel required: ${Math.ceil(totalMarbel)}`);
//   console.log(`Lapis required: ${Math.ceil(totalLapis)}`);
//   console.log(`Gold required: ${Math.ceil(totalGold)}`);
//   console.log(`Final pyramid height: ${height}`);
pyramid(11, 1);
