function tseamAccountIfsSolution(arr) {
  let account = arr.shift().split(` `);
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(` `);
    let [action, gameName] = command;
    if (action === `Install`) {
      if (!account.includes(gameName)) {
        account.push(gameName);
      }
    } else if (action === `Uninstall`) {
      //check if the game is installed
      if (account.includes(gameName)) {
        //find the index of the game to be unistalled
        let index = account.indexOf(gameName);
        if (index > -1) {
          // only splice array when item is found
          account.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    } else if (action === `Update`) {
      if (account.includes(gameName)) {
        //check if the game is installed and
        //find the index of the game to be unistalled
        let index = account.indexOf(gameName);
        if (index > -1) {
          // only splice array when item is found
          account.splice(index, 1); // 2nd parameter means remove one item only
          account.push(gameName);
        }
      }
    } else if (action === `Expansion`) {
      //split the gamename to check if the game is installed(the first element of the array after the split will be the original name of the game and the secont element is the expansion)
      let gameExpansion = gameName.split(`-`);
      let [name, expansion] = gameExpansion;
      if (account.includes(name)) {
        //check if the element exists
        let index = account.indexOf(name);
        if (index > -1) {
          // only splice array when item is found
          //arr.splice(index, 0, item) insert item into account at the specified index (deleting 0 items first)
          account.splice(index + 1, 0, gameExpansion.join(`:`)); // 2nd parameter means remove one item only
        }
      }
    } else if (action === `Play!`) {
      console.log(account.join(` `));
    }
  }
}
tseamAccountIfsSolution([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
