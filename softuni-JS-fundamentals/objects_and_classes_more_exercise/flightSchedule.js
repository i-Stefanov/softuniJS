function flightSchedule(input) {
  let flights = {};
  input[0].forEach((line) => {
    let [flight, destination, secondPartDestination = ``] = line.split(` `);
    flights[flight] = {
      Destination: `${destination} ${secondPartDestination}`.trim(),
      Status: `Ready to fly`,
    };
  });
  input[1].forEach((line) => {
    let [flight, newStatus] = line.split(` `);
    if (flights.hasOwnProperty(flight)) {
      flights[flight].Status = newStatus;
    }
  });

  for (const line in flights) {
    if (flights[line].Status === String(input[2])) {
      console.log(flights[line]);
    }
  }
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
