function energyPoints(data) {
  let myPoints = Number(data.shift());
  let wonBattles = 0;
  let command = data.shift();

  while (command !== "End of battle") {
    command = Number(command);

    if (myPoints >= command) {
      myPoints -= command;
      wonBattles++;
    } else {
      console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${myPoints} energy`);;
      break;
    }
    if (wonBattles % 3 == 0 && wonBattles != 0) {
      myPoints += wonBattles;
    }
    command = data.shift();
  }
  if (command == "End of battle") {
    console.log(`Won battles: ${wonBattles}. Energy left: ${myPoints}`);
  }
}

energyPoints(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);

// energyPoints(["200",
//   "54",
//   "14",
//   "28",
//   "13",
//   "End of battle"])


// Problem 1 - Counter - Strike
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2305#0.
 

// Write a program that keeps track of every won battle against an enemy.You will receive initial energy.Afterward, you will start receiving the distance you need to reach an enemy until the "End of battle" command is given, or you run out of energy.

// The energy you need for reaching an enemy is equal to the distance you receive.Each time you reach an enemy, you win a battle, and your energy is reduced.Otherwise, if you don't have enough energy to reach an enemy, end the program and print: "Not enough energy! Game ends with {count} won battles and {energy} energy".

// Every third won battle increases your energy with the value of your current count of won battles.

// Upon receiving the "End of battle" command, print the count of won battles in the following format:

// "Won battles: {count}. Energy left: {energy}"
// Input / Constraints
// • On the first line, you will receive initial energy – an integer[1 - 10000].
// • On the following lines, you will be receiving the distance of an enemy – an integer[1 - 10000]
// Output
// • The description contains the proper output messages for each case and the format they should be printed.
