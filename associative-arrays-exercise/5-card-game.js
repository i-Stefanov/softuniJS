function cardGame(data) {
  let players = new Map();
  let calculatedResult = {};
  data.forEach((player) => {
    let [playerName, deck] = player.split(`: `);
    let cards = deck.split(`, `);
    if (!players.has(playerName)) {
      players.set(playerName, new Set());
    }
    for (const card of cards) {
      players.get(playerName).add(card);
    }
  });

  let cardPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardType = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  for (const playerInfo of Array.from(players)) {
    let sum = 0;
    for (const card of playerInfo[1]) {
      let cardInfo = card.split(``);
      let type = cardInfo.pop();
      let power = cardInfo.join(``);

      sum += cardType[type] * cardPower[power];
    }
    console.log(`${playerInfo[0]}: ${sum}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
