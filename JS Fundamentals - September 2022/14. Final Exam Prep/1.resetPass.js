function solve(data) {
  let string = data.shift();
  let commands = data.slice();
  let command = commands.shift();

  while (command !== "Done") {
    if (command.includes("TakeOdd")) {
      let modifiedStr = "";
      for (let i = 0; i < string.length; i++) {
        if (i % 2 == 1) {
          modifiedStr += string[i];
        }
      }
      string = modifiedStr;
      console.log(string);
    } else if (command.includes("Cut")) {
      // this line below does not give 100/100 so I wrote the code with string methods only
      // string = string.split(toCut).join("");
      let [, index, length] = command.split(" ");
      let toCut = string.slice(index, Number(index) + Number(length));
      string = string.slice(0, string.indexOf(toCut)) + string.slice(string.indexOf(toCut) + toCut.length)
      console.log(string);
    } else if (command.includes("Substitute")) {
      let [, substring, substitute] = command.split(" ");
      if (string.includes(substring)) {
        string = string.split(substring).join(substitute);
        console.log(string);
      } else {
        console.log("Nothing to replace!");
      }
    }
    command = commands.shift();
  }
  console.log(`Your password is: ${string}`);
}

solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);

console.log('-----------');
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"])

// Yet again, you have forgotten your password.Naturally, it's not the first time this has happened. Actually, you got so tired of it that you decided to help yourself with an intelligent solution.

// Write a password reset program that performs a series of commands upon a predefined string.First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space.The commands will be the following:

// • "TakeOdd"
// o Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// • "Cut {index} {length}"
// o Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o The given index and the length will always be valid.
// • "Substitute {substring} {substitute}"
// o If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// o If it doesn't, prints "Nothing to replace!".
// Input
// • You will be receiving strings until the "Done" command is given.
//   Output
// • After the "Done" command is received, print:
// o "Your password is: {password}"
// Constraints
// • The indexes from the "Cut {index} {length}" command will always be valid.
