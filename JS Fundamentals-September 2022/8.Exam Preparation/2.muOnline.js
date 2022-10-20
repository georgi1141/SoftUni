function roomPassage(data) {
  let health = 100;
  let bitcoins = 0;

  let input = data.split("|");

  for (let i = 0; i < input.length; i++) {
    let params = input[i].split(" ");
    let commamnd = params[0];
    let num = Number(params[1]);

    switch (commamnd) {
      case "potion":
        if (health + num >= 100) {
          console.log(`You healed for ${100 - health} hp.`);
          health = 100;
          console.log(`Current health: ${health} hp.`);
        } else {
          health += num;
          console.log(`You healed for ${num} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        bitcoins += num;
        console.log(`You found ${num} bitcoins.`);
        break;

      default:
        if (health > num) {
          health -= num;
          console.log(`You slayed ${commamnd}.`);
        } else {
          return console.log(
            `You died! Killed by ${commamnd}.\nBest room: ${i + 1}`
          );
        }
        break;
    }
  }

  console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}

// roomPassage("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
roomPassage("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
