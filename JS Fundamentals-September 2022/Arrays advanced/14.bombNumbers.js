function bombNumbers(bombField, bombArray) {
  let bombIndex = null;
  let power = bombArray[1];
  let sum = 0;
  let chargedBomb = bombField.includes(bombArray[0])

  if (chargedBomb) { // IF there isn't special-bomb-number DO NOTHING
    while (chargedBomb) {  //IF there is more than one bobs
      bombIndex = bombField.indexOf(bombArray[0]) //Index of special-bomb-number
      bombField.splice(bombIndex + 1, power); // Removing element on the right side of the bomb excluding bomb
      if (bombIndex - power < 0) { //IF bombs will deploy elements before 0;
        bombField.splice(0, bombIndex + 1); //  Removing all elements including bombIndex
      } else {
        bombField.splice(bombIndex - power, power + 1); // Starting index , power + bomb
      }
      chargedBomb = bombField.includes(bombArray[0]) // check for another bomb
    }
    for (let i = 0; i < bombField.length; i++) {
      sum += bombField[i];
    }
    console.log(sum);
  }
}

// ---------------------60/100----------------



// function bomb(input, bomb) {
//   //get first element from bomb array
//   let bombNum = Number(bomb.slice(0, 1));
//   //get second element from bomb array
//   let bombNumPower = Number(bomb.slice(1, 2));
//   // get the index of the bombNumber in the array
//   let index = input.indexOf(bombNum);
//   //filter the input array
//   let sum = 0;
//   input.filter(function (x) {
//     if (x === bombNum) {
//       // remove elements after the bombNum
//       input.splice(index, bombNumPower + 1);
//       // remove elements before the bombNum
//       input.splice(index - bombNumPower, bombNumPower);
//     }
//   });

//   //sum nums in the input array
//   for (const iterator of input) {
//     sum += iterator;
//   }
//   console.log(sum);
// }

bombNumbers(
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],

  [2, 1]
);
