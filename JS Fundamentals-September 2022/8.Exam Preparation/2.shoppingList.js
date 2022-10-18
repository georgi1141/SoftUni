function shoppingList(shoppingListArray) {
  let shoppingList = shoppingListArray.slice(0, 1).join('').split('!');
  let commands = shoppingListArray.slice(1);

  for (let i = 0; i < commands.length; i++) {
    let current = commands[i];
    if (current === 'Go Shopping!') {
      return console.log(shoppingList.join(', '));
    }
    current = current.split(" ");
    let command = current[0];
    let product = current[1];

    if (command === 'Urgent') { urgent() }
    else if (command === 'Unnecessary') { unnecessary() }
    else if (command === 'Correct') { correct() }
    else if (command === 'Rearrange') { rearrange() }

    function urgent() {
      if (!shoppingList.includes(product)) {
        shoppingList.unshift(product);
      }
    }

    function unnecessary() {
      if (shoppingList.includes(product)) {
        let index = shoppingList.indexOf(product)
        shoppingList.splice(index, 1);
      }
    }

    function correct() {
      if (shoppingList.includes(product)) {
        let index = shoppingList.indexOf(product)
        shoppingList[index] = current[2];
      }
    }

    function rearrange() {
      if (shoppingList.includes(product)) {
        let index = shoppingList.indexOf(product)
        let toEnd = shoppingList.splice(index, 1);
        shoppingList.push(toEnd);
      }
    }
  }
}

// ---------------------another solution-------------//




// function list(array) {
//   let initList = array[0].split("!");


//   for (let i = 1; i < array.length; i++) {
//     let [command, item1, item2] = array[i].split(" ");
//     if (command == "Go") {
//       break;
//     }
//     switch (command) {
//       case "Urgent":
//         if (initList.includes(item1)) {
//           continue;
//         } else {
//           initList.unshift(item1);
//         }
//         break;
//       case "Unnecessary":
//         if (initList.includes(item1)) {
//           initList = initList.filter((x) => x != item1);
//         } else {
//           continue;
//         }
//         break;
//       case "Correct":
//         if (initList.includes(item1)) {
//           initList.splice(initList.indexOf(item1), 1, item2);
//         } else {
//           continue;
//         }
//         break;
//       case "Rearrange":
//         if (initList.includes(item1)) {
//           let removedItem = initList.splice(initList.indexOf(item1), 1);
//           initList.push(removedItem);
//         } else {
//           continue;
//         }
//         break;
//     }
//   }

//   console.log(initList.join(", "));
// }

// list([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);

// list([
//   "Milk!Pepper!Salt!Water!Banana",
//   "Urgent Salt",
//   "Unnecessary Grapes",
//   "Correct Pepper Onion",
//   "Rearrange Grapes",
//   "Correct Tomatoes Potatoes",
//   "Go Shopping!",
// ]);
