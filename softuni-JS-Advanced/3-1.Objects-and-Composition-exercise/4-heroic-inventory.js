function heroicInventory(data) {
  let heroes = [];
  for (const line of data) {
    let hero = {};
    let [name, level, items] = line.split(` / `);
    hero.name = name;
    hero.level = Number(level);
    items = items ? items.split(`, `) : [];
    hero.items = items;
    heroes.push(hero);
  }
  let heroesJSON = JSON.stringify(heroes);
  return heroesJSON;
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
