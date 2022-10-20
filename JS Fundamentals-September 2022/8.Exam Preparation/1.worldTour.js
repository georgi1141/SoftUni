function stopPlanner(data) {
  //getting first line as a string and remove it from data
  let stops = data.shift();

  // itarate through data
  for (const el of data) {
    // get every element from el
    let [command, indexOne, indexTwo] = el.split(":");
    // if el is Travel, brake and return
    if (command == "Travel") {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
    }
    // chack all commands
    switch (command) {
      case "Add Stop":
        // if undex is valid
        if (indexOne >= 0 && indexOne < stops.length) {
          stops =
            stops.slice(0, Number(indexOne)) +
            indexTwo +
            stops.slice(Number(indexOne));
        }
        console.log(stops);
        break;
      case "Remove Stop":
        //if valid
        if (
          indexOne >= 0 &&
          indexOne < stops.length &&
          indexTwo >= 0 &&
          indexTwo < stops.length
        ) {
          stops =
            stops.slice(0, Number(indexOne)) +
            stops.slice(Number(indexTwo) + 1);
        }
        console.log(stops);
        break;
      case "Switch":
        if (stops.includes(indexOne) !== -1) {
          stops = stops.replace(indexOne, indexTwo);
        }
        console.log(stops);
        break;
    }
  }
}

stopPlanner([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

//   Problem 1 - World Tour
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#0.

// You are a world traveler, and your next goal is to make a world tour.To do that, you have to plan out everything first.To start with, you would like to plan out all of your stops where you will have a break.

// On the first line, you will be given a string containing all of your stops.Until you receive the command "Travel", you will be given some commands to manipulate that initial string.The commands can be:

// • "Add Stop:{index}:{string}":
// o Insert the given string at that index only if the index is valid
// • "Remove Stop:{start_index}:{end_index}":
// o Remove the elements of the string from the starting index to the end index(inclusive) if both indices are valid
// • "Switch:{old_string}:{new_string}":
// o If the old string is in the initial string, replace it with the new one(all occurrences)
// Note: After each command, print the current state of the string if it is valid!

// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"

// Input / Constraints
// • JavaScript: you will receive a list of strings
// • An index is valid if it is between the first and the last element index(inclusive)(0 …..Nth) in the sequence.
//   Output
// • Print the proper output messages in the proper cases as described in the problem description
