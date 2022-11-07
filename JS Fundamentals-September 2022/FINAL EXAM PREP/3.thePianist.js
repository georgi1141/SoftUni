function organiser(data) {
  let numPieces = Number(data.shift());
  let collection = {};

  // put numPieces in collection with composer and key properties
  for (let i = 0; i < numPieces; i++) {
    let line = data[i].split("|");
    let piece = line[0];
    let composer = line[1];
    let key = line[2];

    collection[piece] = {
      composer,
      key,
    };
  }
  // cut the number of added elements in the object from the intial data
  data = data.splice(numPieces);

  data.forEach((element) => {
    let command = element.split("|");
    let firstElement = command[0];

    while (firstElement !== "Stop") {
      if (firstElement === "Add") {
        let piece = command[1];
        let composer = command[2];
        let key = command[3];
        if (!collection[piece]) {
          collection[piece] = {
            composer,
            key,
          };
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        } else {
          console.log(`${piece} is already in the collection!`);
        }
      } else if (firstElement === "Remove") {
        let elementoToRemove = command[1];
        if (collection[elementoToRemove]) {
          delete collection[elementoToRemove];
          console.log(`Successfully removed ${elementoToRemove}!`);
        } else {
          console.log(
            `Invalid operation! ${elementoToRemove} does not exist in the collection.`
          );
        }
      } else if (firstElement === "ChangeKey") {
        let elementToChange = command[1];
        let key = command[2];
        if (!collection[elementToChange]) {
          console.log(
            `Invalid operation! ${elementToChange} does not exist in the collection.`
          );
        } else {
          collection[elementToChange].key = [key];
          console.log(`Changed the key of ${elementToChange} to ${key}!`);
        }
      }
      return;
    }
  });
  let entries = Object.entries(collection);

  entries.forEach((element) => {
    let piece = element[0];
    let entries = Object.entries(element[1]);
    let composer = entries[0][1];
    let key = entries[1][1];
    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
  });
}

organiser([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

// Problem 3 - The Pianist
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#2.

// You are a pianist, and you like to keep a list of your favorite piano pieces.Create a program to help you organize it and add, change, remove pieces from it!

// On the first line of the standard input, you will receive an integer n – the number of pieces you will initially have.On the next n lines, the pieces themselves will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".

//   Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:

// • "Add|{piece}|{composer}|{key}":
// o You need to add the given piece with the information about it to the other pieces and print:
// "{piece} by {composer} in {key} added to the collection!"

// o If the piece is already in the collection, print:
// "{piece} is already in the collection!"

// • "Remove|{piece}":
// o If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"

// o Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."

// • "ChangeKey|{piece}|{new key}":
// o If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"

// o Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."

// Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"

// Input / Constraints
// • You will receive a single integer at first – the initial number of pieces in the collection
// • For each piece, you will receive a single line of text with information about it.
// • Then you will receive multiple commands in the way described above until the command "Stop".
//   Output
// • All the output messages with the appropriate formats are described in the problem description.
