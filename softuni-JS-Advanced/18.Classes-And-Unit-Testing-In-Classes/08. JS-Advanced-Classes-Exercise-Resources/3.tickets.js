function tickets(arr, criterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];
  arr.forEach((ticketInfo) => {
    const [destination, price, status] = ticketInfo.split(`|`);
    result.push(new Ticket(destination, Number(price), status));
  });
  let sorted = result.sort((a, b) => {
    if (criterion !== `price`) {
      return a[criterion].localeCompare(b[criterion]);
    } else {
      return a[criterion] - b[criterion];
    }
  });
  return sorted;
}
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "price"
);
