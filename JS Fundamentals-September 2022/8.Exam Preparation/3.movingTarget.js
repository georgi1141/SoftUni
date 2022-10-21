function trackTargets(integers) {
  let initTargets = integers.shift().split(" ").map(Number); //arr with nums

  let command = integers.shift();

  while (command !== "End") {
    command = command.split(" ");
    let manipulatorCommand = command[0];
    let firstValue = Number(command[1]);
    let secondValue = Number(command[2]);

    switch (manipulatorCommand) {
      case "Shoot":
        if (initTargets[firstValue] !== undefined) {
          initTargets[firstValue] -= secondValue;
          if (initTargets[firstValue] <= 0) {
            initTargets.splice(firstValue, 1);
          }
        }
        break;
      case "Add":
        if (initTargets[firstValue] !== undefined) {
          initTargets.splice(firstValue, 0, secondValue);
        } else {
          console.log(`Invalid placement!`);
        }
        break;
      case "Strike":
        let radius = secondValue * 2 + 1;
        if (
          initTargets[firstValue - secondValue] >= 0 &&
          initTargets[firstValue + secondValue] !== 0
        ) {
          initTargets.splice(firstValue - secondValue, radius);
        } else {
          console.log(`Strike missed!`);
        }
        break;
    }

    command = integers.shift();
  }
  console.log(initTargets.join("|"));
}

trackTargets(["52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"])

console.log(`----------------------------------------`);

trackTargets(["1 2 3 4 5", "Strike 0 1", "End"]);

// Problem 3 - Moving Target
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2305#2.

// You are at the shooting gallery again, and you need a program that helps you keep track of moving targets.On the first line, you will receive a sequence of targets with their integer values, split by a single space.Then, you will start receiving commands for manipulating the targets until the "End" command.The commands are the following:

// • "Shoot {index} {power}"
// o Shoot the target at the index if it exists by reducing its value by the given power(integer value).
// o Remove the target if it is shot.A target is considered shot when its value reaches 0.
// • "Add {index} {value}"
// o Insert a target with the received value at the received index if it exists.
// o If not, print: "Invalid placement!"
// • "Strike {index} {radius}"
// o Remove the target at the given index and the ones before and after it depending on the radius.
// o If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
//   Example: "Strike 2 2"

// { radius } { radius } { strikeIndex } { radius } { radius }

// • "End"
// o Print the sequence with targets in the following format and end the program:
// "{target1}|{target2}…|{targetn}"

// Input / Constraints
// • On the first line, you will receive the sequence of targets – integer values[1 - 10000].
// • On the following lines, until the "End" will be receiving the command described above – strings.
// • There will never be a case when the "Strike" command would empty the whole sequence.
//   Output
// • Print the appropriate message in case of any command if necessary.
// • In the end, print the sequence of targets in the format described above.
