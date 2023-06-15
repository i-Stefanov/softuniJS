function solve() {
  let fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,

      fight: () => {
        if (state.stamina > 0) {
          state.stamina--;
          console.log(`${name} slashes at the foe!`);
        }
      },
    };
    return state;
  };

  let mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,

      cast: (spell) => {
        if (state.mana > 0) {
          state.mana--;
          console.log(`${name} cast ${spell}`);
        }
      },
    };
    return state;
  };

  return { fighter, mage };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
