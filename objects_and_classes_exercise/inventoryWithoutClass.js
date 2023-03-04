function inventory(heroes) {
  let heroesArr = [];
  for (let hero of heroes) {
    let [name, level, items] = hero.split(` / `);
    let heroData = {
      name: name,
      level: Number(level),
      items: items,
    };
    heroesArr.push(heroData);
  }
  let sortedHeroes = heroesArr.sort((heroA, heroB) => {
    return heroA.level - heroB.level;
  });
  for (const hero of sortedHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
