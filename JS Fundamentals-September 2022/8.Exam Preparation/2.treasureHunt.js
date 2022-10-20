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
