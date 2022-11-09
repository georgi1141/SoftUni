function info(data) {
  // get num of plants to insert in object
  let numPlants = Number(data.shift());
  // create object to store data
  let obj = {};
  // insert all plants with theis props in the object accordingly
  for (let i = 0; i < numPlants; i++) {
    let [plantName, rarity] = data[i].split("<->");
    if (obj[plantName]) {
      obj[plantName].rarity = rarity;
    } else {
      obj[plantName] = { rarity: Number(rarity), rating: [] };
    }
  }
  // delete inserted plants from initial data as we wont need it anymore
  data = data.splice(numPlants);
  // get current line
  let command = data.shift();
  while (command !== "Exhibition") {
    let command1 = command.split(": ");
    let currentCommand = command1[0];
    switch (currentCommand) {
      case "Rate":
        let command = command1[1].split(" - ");
        let plantName = command[0];
        let rating = Number(command[1]);
        if (!obj[plantName]) {
          console.log("error");
          break;
        } else {
          obj[plantName].rating.push(rating);
        }
        break;
      case "Update":
        let commandUpdate = command1[1].split(" - ");
        let plantNameUpdate = commandUpdate[0];
        let newRarity = Number(commandUpdate[1]);
        if (!obj[plantNameUpdate]) {
          console.log("error");
          break;
        } else {
          obj[plantNameUpdate].rarity = newRarity;
        }

        break;
      case "Reset":
        let commandReset = command1[1].split(" - ");
        let plantNameReset = commandReset[0];
        if (!obj[plantNameReset]) {
          console.log("error");
          break;
        } else {
          obj[plantNameReset].rating = [];
        }
        break;
    }
    // update the line
    command = data.shift();
  }
  // log the message
  console.log(`Plants for the exhibition:`);
  // get entries
  let entries = Object.entries(obj);
  // loop thgrough entries and destructure parameters in the loop variable
  for (const [name, { rarity, rating }] of entries) {
    console.log(
      `- ${name}; Rarity: ${rarity}; Rating: ${average(rating).toFixed(2)}`
    );

  }
  // old code that was replaced
  // entries.forEach((element) => {
  //   let name = element[0];
  //   let elements = Object.entries(element[1]);
  //   let rarity = elements[0][1];
  //   let rating = elements[1][1];

  //   console.log(
  //     `- ${name}; Rarity: ${rarity}; Rating: ${average(rating).toFixed(2)}`
  //   );
  // });
  // function to calc the average
  function average(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}

info([
  "3",

  "Arnoldii<->4",

  "Woodii<->7",

  "Welwitschia<->2",

  "Rate: Woodii - 10",

  "Rate: Welwitschia - 7",

  "Rate: Arnoldii - 3",

  "Rate: Woodii - 5",

  "Update: Woodii - 5",

  "Reset: Arnoldii",

  "Exhibition",
]);

// Problem 3 - Plant Discovery
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#2.

// You have now returned from your world tour.On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.

// On the first line, you will receive a number n.On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}".Store that information because you will need it later.If you receive a plant more than once, update its rarity.

// After that, until you receive the command "Exhibition", you will be given some of these commands:

// • "Rate: {plant} - {rating}" – add the given rating to the plant(store all ratings)
// • "Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
// • "Reset: {plant}" – remove all the ratings of the given plant
// Note: If any given plant name is invalid, print "error"

// After the command "Exhibition", print the information that you have about the plants in the following format:

// "Plants for the exhibition:
//   - { plant_name1 }; Rarity: { rarity }; Rating: { average_rating }

// - { plant_name2 }; Rarity: { rarity }; Rating: { average_rating }
// …

// - { plant_nameN }; Rarity: { rarity }; Rating: { average_rating } "

// The average rating should be formatted to the second decimal place.

//   Input / Constraints
// • You will receive the input as described above
// • JavaScript: you will receive a list of strings
// Output
// • Print the information about all plants as described above
