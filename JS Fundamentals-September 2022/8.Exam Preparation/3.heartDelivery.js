function heartDelivery(inputData) {
  let numArray = inputData.slice(0, 1).join('').split('@').map(Number);
  let commands = inputData.slice(1);
  let arrIndex = 0;
  let target = arrIndex;
  let counter = 0;


  for (let command of commands) {
    let [jump, index] = command.split(' ');

    //IF reached last command
    if (jump === "Love!") {
      console.log(`Cupid's last position was ${target}.`);
      for (let el of numArray) {
        el > 0 ? counter++ : null;
      }
      counter > 0 ? console.log(`Cupid has failed ${counter} places.`) : console.log('Mission was successful.');
      return;
    }
    index = Number(index);
    target = arrIndex + index;

    //IF target is outside the array
    if (target >= numArray.length) {
      target = 0;
    }

    arrIndex = target;
    if (numArray[target] > 0) {
      numArray[target] -= 2;

      //IF array element = 0 
      if (numArray[target] <= 0) {
        console.log(`Place ${target} has Valentine's day.`);
      }
    } else {
      console.log(`Place ${target} already had Valentine's day.`);
    }
  }
}

heartDelivery(["2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!"])






//-------------------------80/100----------------//

// function solve(data) {
//   let neighbourhood = data.shift().split("@").map(Number); // [ 10, 10, 10, 2 ]
//   let command = data.shift();
//   let index = 0;

//   while (command !== "Love!") {
//     let commandSplit = command.split(" ");
//     let elementCommand = Number(commandSplit[1]);
//     index += elementCommand;

//     if (neighbourhood[index] !== undefined) {
//       if (neighbourhood[index] === 0) {
//         console.log(`Place ${index} already had Valentine's day.`);
//         continue;
//       }
//       let toRemove = neighbourhood.splice(index, 1);
//       neighbourhood.splice(index, 0, toRemove - 2);
//       if (neighbourhood[index] === 0) {
//         console.log(`Place ${index} has Valentine's day.`);
//       }
//     } else {
//       index = 0;
//       if (neighbourhood[index] > 0) {
//         neighbourhood[index] -= 2;
//         if (neighbourhood[index] === 0) {
//           console.log(`Place ${index} has Valentine's day.`);
//         }
//       } else {
//         console.log(`Place ${index} already had Valentine's day.`);
//       }
//     }
//     command = data.shift();
//   }
//   console.log(`Cupid's last position was ${index}.`);
//   if (neighbourhood.every((x) => x === 0)) {
//     console.log(`Mission was successful.`);
//   } else {
//     let failedCount = neighbourhood.filter((x) => x !== 0);
//     console.log(`Cupid has failed ${failedCount.length} places.`);
//   }
// }

// solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

// console.log(`-----------------------------`);

// solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
