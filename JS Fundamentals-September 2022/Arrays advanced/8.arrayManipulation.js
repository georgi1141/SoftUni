function arrManipulation(input) {
  // pulling the first element of the array and storing it into a variable
  //  .split() returns an array
  //  .map() converts every element of the new array from a string to a number
  let array = input[0].split(" ").map(Number);

  // looping through the commands in the input array
  for (let i = 1; i < input.length; i++) {
    //destructuring each command to its actuall command and the number that contains
    let [command, firstNum, secondNum] = input[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    // checking which is the command
    switch (command) {
      // adding an element to the end of the array
      case "Add":
        array.push(firstNum);
        break;
      // remove all nums from the array
      case "Remove":
        array = array.filter((element) => element !== firstNum);
        break;
      // remove nums at a given index
      case "RemoveAt":
        array.splice(firstNum, 1);
        break;
      //insert nums at a given index
      case "Insert":
        array.splice(secondNum, 0, firstNum);
        break;
    }
  }

  console.log(array.join(" "));
}

arrManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

arrManipulation([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
