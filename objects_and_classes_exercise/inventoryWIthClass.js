function inventory(heroes) {
  class Hero {
    constructor(name, level, items) {
      (this.name = name), (this.level = level), (this.items = items);
    }
    displayHero() {
      console.log(`Hero: ${this.name}`);
      console.log(`level => ${this.level}`);
      console.log(`items => ${this.items.join(`, `)}`);
    }
  }
  let heroesArr = [];
  for (let hero of heroes) {
    let heroData = hero.split(` / `);
    let heroName = heroData.shift();
    let level = Number(heroData.shift());
    let items = heroData[0].split(`, `);

    let newHero = new Hero(heroName, level, items);
    heroesArr.push(newHero);
    // newHero.displayHero();
  }
  let sortedHeroes = heroesArr.sort((a, b) => {
    return a.level - b.level;
  });
  for (const hero of sortedHeroes) {
    hero.displayHero();
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
