function game(data) {
  let elements = data.shift().split(" ");
  let numMoves = 0;

  for (let i = 0; i < data.length; i++) {
    let command = data[i].split(" ");
    // if elements are finished so END the bitch-game and win
    if (elements.length == 0) {
      return console.log(`You have won in ${numMoves} turns!`);
    }
    // if command is end - break the crappy function and return value
    if (command[0] == "end") {
      return console.log(`Sorry you lose :( \n ${elements.join(" ")}`);
    }
    let indexOne = Number(command[0]);
    let indexTwo = Number(command[1]);
    // if indexes are equal to each other or out of bound of the sequence of elements
    if (
      indexOne == indexTwo ||
      indexOne < 0 ||
      // !!!!!dont forget the '=' or '.length-1' when you have .length as it returns index+1 in this casa!!!!!
      indexOne >= elements.length ||
      indexTwo < 0 ||
      indexTwo >= elements.length
    ) {
      numMoves++;
      elements.splice(elements.length / 2, 0, `-${numMoves}a`, `-${numMoves}a`);
      console.log(`Invalid input! Adding additional elements to the board`);
      continue;
    }
    // if both indexes match in the sequence
    if (elements[indexOne] == elements[indexTwo]) {
      // remove from bigger index so it does not mess with the splice index later on
      if (indexOne > indexTwo) {
        console.log(
          `Congrats! You have found matching elements - ${elements[indexOne]}!`
        );
        elements.splice(indexOne, 1);
        elements.splice(indexTwo, 1);
        numMoves++;
      } else {
        console.log(
          `Congrats! You have found matching elements - ${elements[indexOne]}!`
        );
        elements.splice(indexTwo, 1);
        elements.splice(indexOne, 1);
        numMoves++;
      }
    } else {
      console.log(`Try again!`);
      numMoves++;
    }
  }
}

game(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);

game(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);

game(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);

// Problem 3 - Memory game
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2517#1.

// Write a program that recreates the Memory game.

// On the first line, you will receive a sequence of elements.Each element in the sequence will have a twin.Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.

// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:

// "-{number of moves until now}a"

// Then print this message on the console:

// "Invalid input! Adding additional elements to the board"

// Input
// • On the first line, you will receive a sequence of elements
// • On the following lines, you will receive integers until the command "end"
// Output
// • Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - ${element}!"

// • If the player hit two different elements, you should print on the console the following message:
// "Try again!"

// • If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message:
// "You have won in {number of moves until now} turns!"

// • If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(

// {the current sequence's state}"

//   Constraints
// • All elements in the sequence will always have a matching element.
