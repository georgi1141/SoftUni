function solve(numPlates) {
  let container = {};

  numPlates.forEach((element) => {
    let [command, num] = element.split(", ");

    if (command === "IN") {
      container[num] = command;
    } else {
      delete container[num];
    }
  });
  let entries = Object.entries(container).sort((x, y) =>
    x[0].localeCompare(y[0])
  );

  if (entries.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    entries.forEach((element) => {
      console.log(element[0]);
    });
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
