function travel(params) {
  let commands = params.shift().split("||");
  let fuel = Number(params.shift());
  let ammunition = Number(params.shift());

  for (const command of commands) {
    if (command === "Titan") {
      return console.log("You have reached Titan, all passengers are safe.");
    }

    let [el1, el2] = command.split(" ");
    el2 = Number(el2);

    switch (el1) {
      case "Travel":
        if (fuel >= el2) {
          fuel -= el2;
          console.log(`The spaceship travelled ${el2} light-years.`);
        } else {
          return console.log(`Mission failed.`);
        }
        break;
      case "Enemy":
        if (ammunition >= el2) {
          ammunition -= el2;
          console.log(`An enemy with ${el2} armour is defeated.`);
        } else {
          if (el2 * 2 < fuel) {
            fuel -= el2 * 2;
            console.log(`An enemy with ${el2} armour is outmaneuvered.`);
          } else {
            return console.log(`Mission failed.`);
          }
        }
        break;
      case "Repair":
        fuel += el2;
        ammunition += el2 * 2;
        console.log(`Ammunitions added: ${el2 * 2}.`);
        console.log(`Fuel added: ${el2}.`);
        break;
    }
  }
}

travel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);

console.log(`-----------------------------`);

travel([
  "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
  "60",
  "100",
]);
