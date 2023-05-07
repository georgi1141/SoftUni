function inventory(stash) {
  let journal = stash.shift().split(", ");
  let commands = stash.shift();

  while (commands !== "Craft!") {
    let [command, item] = commands.split(" - ");

    switch (command) {
      case "Collect":
        if (!journal.includes(item)) {
          journal.push(item);
        }
        break;
      case "Drop":
        if (journal.includes(item)) {
          journal = journal.filter((x) => x !== item);
        }
        break;
      case "Combine Items":
        let [oldItem, newItem] = item.split(":");
        if (journal.includes(oldItem)) {
          let index = journal.indexOf(oldItem);
          journal.splice(index + 1, 0, newItem);
        }
        break;
      case "Renew":
        if (journal.includes(item)) {
          let index = journal.indexOf(item);
          let toReplace = journal.splice(index, 1);
          journal.push(toReplace);
        }
        break;
    }
    commands = stash.shift();
  }
  console.log(journal.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);

inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
