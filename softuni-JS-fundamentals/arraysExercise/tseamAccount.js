function tseamAccount(arr) {
  //extract the initial account from the array given
  let account = arr.shift().split(` `);

  for (let i = 0; i < arr.length; i++) {
    // create an array from each element in the initial array
    let command = arr[i].split(` `);
    //destructuring the command array to action to be done and the name of the game
    let [action, gameName] = command;
    switch (action) {
      case `Install`:
        let isInstalled = true;
        for (let j = 0; j < account.length; j++) {
          let gameInstalled = account[j];
          //check if the game is already installed
          if (gameName !== gameInstalled) {
            isInstalled = false;
          }
        }
        // if the game is not installed then add it to the and of the account array
        if (!isInstalled) {
          account.push(gameName);
        }
        break;
      case `Uninstall`:
        for (let k = 0; k < account.length; k++) {
          //check if the game is installed and
          //find the index of the game to be unistalled
          let index = account.indexOf(gameName);
          if (index > -1) {
            // only splice array when item is found
            account.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        break;
      case `Update`:
        for (let l = 0; l < account.length; l++) {
          let index = account.indexOf(gameName);
          if (index > -1) {
            // only splice array when item is found
            account.splice(index, 1); // 2nd parameter means remove one item only
            account.push(gameName);
            break;
          }
        }
        break;
      case `Expansion`:
        for (let m = 0; m < account.length; m++) {
          //split the gamename to check if the game is installed(the first element of the array after the split will be the original name of the game and the secont element is the expansion)
          let expansionGameName = gameName.split(`-`);
          //check if the element exists
          let index = account.indexOf(expansionGameName[0]);
          if (index > -1) {
            // only splice array when item is found
            //arr.splice(index, 0, item) insert item into account at the specified index (deleting 0 items first)
            account.splice(index + 1, 0, expansionGameName.join(`:`)); // 2nd parameter means remove one item only

            break;
          }
        }
        break;
      case `Play!`:
        console.log(account.join(` `));
        break;
      default:
        break;
    }
  }
}
// tseamAccount([
//   "CS WoW Diablo",
//   "Uninstall XCOM",
//   "Update PeshoGame",
//   "Update WoW",
//   "Expansion Civ-V",
//   "Play!",
// ]);
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
