function party(guestList) {
  let vipGuests = [];
  let regularGuests = [];
  let guestName = guestList.shift();
  while (guestName !== "PARTY") {
    let isVIP = !isNaN(guestName[0]);
    if (isVIP) {
      vipGuests.push(guestName);
    } else {
      regularGuests.push(guestName);
    }
    guestName = guestList.shift();
  }
  let allGuests = vipGuests.concat(regularGuests);
  guestList.forEach((guest) => {
    allGuests.splice(allGuests.indexOf(guest), 1);
  });
  console.log(allGuests.length);
  allGuests.forEach((guest) => console.log(guest));
}

party([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
