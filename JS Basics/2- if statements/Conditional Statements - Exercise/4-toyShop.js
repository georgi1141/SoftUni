function toys(input) {
  let priceTrip = Number(input[0]);

  let puzzels = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let toysCount = puzzels + dolls + bears + minions + trucks;

  let toysSum =
    puzzels * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

  if (toysCount >= 50) {
    toysSum *= 0.75;
  }

  toysSum *= 0.9;

  if (toysSum >= priceTrip) {
    console.log(`Yes! ${(toysSum - priceTrip).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(priceTrip - toysSum).toFixed(2)} lv needed.`
    );
  }
}

toys(["320", "8", "2", "5", "5", "1"]);
