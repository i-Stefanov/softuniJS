function muOnline(str) {
  let health = 100;
  let bitcoins = 0;
  // create an array of the rooms of he dungeon
  let rooms = str.split(`|`);

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    //dividing the room elements
    let commands = room.split(` `);
    //destructuring the room
    let [command, value] = commands;
    value = Number(value);

    if (command === `potion`) {
      //Create a variable that shows how much helth you need to heal up to 100
      let lackingHealthPoints = 100 - health;
      health += value;
      if (health > 100) {
        health = 100;
        console.log(`You healed for ${lackingHealthPoints} hp.`);
      } else {
        console.log(`You healed for ${value} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } //if you find a chest add the ammount of bitcoins to the bitcoins you have
    else if (command === `chest`) {
      bitcoins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      //You met a monster
      //decrease the health by the attack value of the monster
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        // The monster name is the command from the room
        // If your helth is less than the monster attack value you die.
        console.log(`You died! Killed by ${command}.`);
        // Print the room you reached before you died
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
