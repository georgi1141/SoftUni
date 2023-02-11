function ticketSorter(tickets, status) {
  class Ticket {
    constructor(destination, price, status) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status);
    }
  }
  let result = [];
  tickets.map((ticket) => {
    let [a, b, c] = ticket.split("|");
    b = Number(b);
    result.push(new Ticket(a, b, c));
  });
  return result.sort((a, b) => {
    if (typeof a[status] === "number") {
      return a[status] - b[status];
    } else {
      return a[status].localeCompare(b[status]);
    }
  });
}

console.log(
  ticketSorter(
    [
      "Philadelphia|94.20|available",

      "New York City|95.99|available",

      "New York City|95.99|sold",

      "Boston|126.20|departed",
    ],

    "destination"
  )
);

console.log("--------------------");

console.log(
  ticketSorter(
    [
      "Philadelphia|94.20|available",

      "New York City|95.99|available",

      "New York City|95.99|sold",

      "Boston|126.20|departed",
    ],

    "status"
  )
);
