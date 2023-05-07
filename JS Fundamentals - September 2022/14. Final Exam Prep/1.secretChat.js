function solve(data) {
  //extract concealed message from data
  let concealedMessage = data.shift();
  //extract current operation from data (will update it in the while loop)
  let currentOperation = data.shift();
  // while loop while we receive the command 'Reveal'
  while (currentOperation != "Reveal") {
    //extract arguments from the command
    let [command, arg1, arg2] = currentOperation.split(":|:");

    if (command === "InsertSpace") {
      //adding empty space between a certain index by building a new string
      concealedMessage =
        concealedMessage.slice(0, arg1) + " " + concealedMessage.slice(arg1);
      console.log(concealedMessage);
    } else if (command === "Reverse") {
      if (concealedMessage.includes(arg1)) {
        //remove arg1 from a string by replacing it with empty string
        concealedMessage = concealedMessage.replace(arg1, "");
        //use function to reverse a string
        arg1 = reverseString(arg1);
        // add reversed string at the end of the concealed message
        concealedMessage += arg1;
        console.log(concealedMessage);
      } else {
        console.log("error");
      }
    } else if (command === "ChangeAll") {
      // split will return new array splitted by the arg1 and the join method by arg2 will basically return a string with replaced arg1 with arg2
      concealedMessage = concealedMessage.split(arg1).join(arg2);
      console.log(concealedMessage);
    }
    currentOperation = data.shift();
  }
  // reusable function to reverse a string
  function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  //pring message on the console as needed
  console.log(`You have a new text message: ${concealedMessage}`);
}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

console.log("--------------");
solve([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);

// You have plenty of free time, so you decide to write a program that conceals and reveals your received messages.Go ahead and type it in!

// On the first line of the input, you will receive the concealed message.After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content.There are several types of instructions, split by ":|:"

// • "InsertSpace:|:{index}":
// o Inserts a single space at the given index.The given index will always be valid.
// • "Reverse:|:{substring}":
// o If the message contains the given substring, cut it out, reverse it and add it at the end of the message.
// o If not, print "error".
// o This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
// • "ChangeAll:|:{substring}:|:{replacement}":
// o Changes all occurrences of the given substring with the replacement text.
//   Input / Constraints
// • On the first line, you will receive a string with a message.
// • On the following lines, you will be receiving commands, split by ":|:".
//   Output
// • After each set of instructions, print the resulting string.
// • After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"
