function manageTreasure(params) {
  let initLoot = params.shift().split("|"); // "Gold|Silver|Bronze|Medallion|Cup"
  let command = params.shift();
  while (command != "Yohoho!") {
    let data = command.split(" "); // [ 'Loot', 'Wood', 'Gold', 'Coins' ]
    let keyCommand = data.shift();
    switch (keyCommand) {
      case "Loot":
        for (let i = 0; i < data.length; i++) {
          let toPush = data[i];
          if (!initLoot.includes(data[i])) {
            initLoot.unshift(toPush);
          }
        }
        break;
      case "Drop":
        let index = Number(data[0]);
        if (initLoot[index] != undefined) {
          let toAdd = initLoot.splice(index, 1).join();
          initLoot.push(toAdd);
        }
        break;
      case "Steal":
        let itemsToRemove = Number(data[0]);
        if (initLoot.length < itemsToRemove) {
          let catItems = initLoot.splice(0);
          console.log(catItems.join(", "));
        } else {
          catItems = initLoot.splice(initLoot.length - itemsToRemove);
          console.log(catItems.join(", "));
        }
        break;
    }
    command = params.shift();
  }
  let sum = 0;
  for (const iterator of initLoot) {
    let length = iterator.length;
    sum += length;
  }

  if (initLoot.length == 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    console.log(
      `Average treasure gain: ${(sum / initLoot.length).toFixed(
        2
      )} pirate credits.`
    );
  }
}

manageTreasure([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

manageTreasure([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);



// Problem 2 - Treasure Hunt
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/1773#1.
 

// The pirates need to carry a treasure chest safely back to the ship, looting along the way.

// Create a program that manages the state of the treasure chest along the way.On the first line, you will receive the initial loot of the treasure chest, which is a string of items separated by a "|".

// "{loot1}|{loot2}|{loot3} … {lootn}"

// The following lines represent commands until "Yohoho!" which ends the treasure hunt:

// • "Loot {item1} {item2}…{itemn}":
// o Pick up treasure loot along the way.Insert the items at the beginning of the chest.
// o If an item is already contained, don't insert it.
// • "Drop {index}":
// o Remove the loot at the given position and add it at the end of the treasure chest.
// o If the index is invalid, skip the command.
// • "Steal {count}":
// o Someone steals the last count loot items.If there are fewer items than the given count, remove as much as there are.
// o Print the stolen items separated by ", ":
// "{item1}, {item2}, {item3} … {itemn}"

// In the end, output the average treasure gain, which is the sum of all treasure items length divided by the count of all items inside the chest formatted to the second decimal point:

// "Average treasure gain: {averageGain} pirate credits."

// If the chest is empty, print the following message:

// "Failed treasure hunt."

// Input
// • On the 1st line, you are going to receive the initial treasure chest(loot separated by "|")
// • On the following lines, until "Yohoho!", you will be receiving commands.
//   Output
// • Print the output in the format described above.
//   Constraints
// • The loot items will be strings containing any ASCII code.
// • The indexes will be integers in the range[-200…200]
// • The count will be an integer in the range[1….100]