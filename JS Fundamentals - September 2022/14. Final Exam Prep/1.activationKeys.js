function solve(data) {
  // getting the initial key
  let activationKey = data.shift();
  // getting each instruvtions one at a time and changing it later in the while loop
  let instructions = data.shift();
  // while the instruction is different than 'Generate'
  while (instructions !== "Generate") {
    // splitting and getting an array of the elements in the string 
    let splittedArr = instructions.split(">>>");
    // every time the first element in the splitted array will be the command
    let command = splittedArr[0];
    // chacking what is the command 
    switch (command) {
      case "Contains":
        let substring = splittedArr[1];
        // if the element is somewhere to be fount in the key
        if (activationKey.includes(substring)) {
          console.log(`${activationKey} contains ${substring}`);
        } else {
          console.log("Substring not found!");
        }
        break;
      case "Flip":
        // getting indexes start and end and replace that part with either upper or lower case depending on the case
        let UpperLower = splittedArr[1];
        let startIndex = splittedArr[2];
        let endIndex = splittedArr[3];
        if (UpperLower == "Upper") {
          let copyStr = activationKey
            .substring(startIndex, endIndex)
            .toUpperCase();
          let newStr =
            activationKey.substring(0, startIndex) +
            copyStr +
            activationKey.substring(endIndex);
          activationKey = newStr;
          console.log(activationKey);
        } else {
          let copyStr = activationKey
            .substring(startIndex, endIndex)
            .toLowerCase();
          let newStr =
            activationKey.substring(0, startIndex) +
            copyStr +
            activationKey.substring(endIndex);
          activationKey = newStr;
          console.log(activationKey);
        }
        break;
      case "Slice":
        // deleting part of the string by indexes
        let startIndexSlice = splittedArr[1];
        let endIndexSlice = splittedArr[2];
        let newStr =
          activationKey.substring(0, startIndexSlice) +
          activationKey.substring(endIndexSlice);
        activationKey = newStr;
        console.log(activationKey);
        break;
    }
    instructions = data.shift();
  }
  // logging the modified key
  console.log(`Your activation key is: ${activationKey}`);
}

solve([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);

// You are about to make some good money, but first, you need to think of a way to verify who paid for your product and who didn't. You have decided to let people use the software for a free trial period and then require an activation key to continue using the product. Before you can cash out, the last step is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!

// The first line of the input will be your raw activation key.It will consist of letters and numbers only.

// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.

// There are several types of instructions, split by ">>>":

// • "Contains>>>{substring}":
// o If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// o Otherwise, prints: "Substring not found!"
// • "Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// o Changes the substring between the given indices(the end index is exclusive) to upper or lower case and then prints the activation key.
// o All given indexes will be valid.
// • "Slice>>>{startIndex}>>>{endIndex}":
// o Deletes the characters between the start and end indices(the end index is exclusive) and prints the activation key.
// o Both indices will be valid.
//   Input
// • The first line of the input will be a string consisting of letters and numbers only.
// • After the first line, until the "Generate" command is given, you will be receiving strings.
//   Output
// • After the "Generate" command is received, print:
// o "Your activation key is: {activation key}"
