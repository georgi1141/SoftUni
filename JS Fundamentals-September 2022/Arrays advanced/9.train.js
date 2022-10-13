function wagonSolving(input) {
  // converting first element into an array
  let array = input.shift().split(" ").map(Number);
  // getting the max capacity as a number
  let maxCapacity = Number(input.shift());
  // itterating through the input array
  for (let i = 0; i < input.length; i++) {
    // getting the values from the string
    let [command, num] = input[i].split(" ");
    //checking if command is Add
    if (command === "Add") {
      array.push(num);
    } else {
      for (let j = 0; j < array.length; j++) {
        if (array[j] + Number(command) <= maxCapacity) {
          array[j] += Number(command);
          break;
        }
      }
    }
  }

  console.log(array.join(" "));
}

wagonSolving(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

wagonSolving(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
