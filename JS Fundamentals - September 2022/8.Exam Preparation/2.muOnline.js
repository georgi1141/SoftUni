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


// Problem 2. Mu Online
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2028#1.
 
// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with ' | ' (vertical bar): "room1|room2|room3…"

// Each room contains a command and a number, separated by space.The command can be:

// • "potion"
// o You are healed with the number in the second part.But your health cannot exceed your initial health(100).
// o First print: "You healed for {amount} hp."
// o After that, print your current health: "Current health: {health} hp."
// • "chest"
// o You've found some bitcoins, the number in the second part.
// o Print: "You found {amount} bitcoins."
// • In any other case, you are facing a monster, which you will fight.The second part of the room contains the attack of the monster.You should remove the monster's attack from your health.
// o If you are not dead(health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// o If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines:

// "You've made it!"

// "Bitcoins: {bitcoins}"

// "Health: {health}"

// Input / Constraints
// You receive a string representing the dungeon's rooms, separated with ' | ' (vertical bar): "room1|room2|room3…".

// Output
// Print the corresponding messages described above.
