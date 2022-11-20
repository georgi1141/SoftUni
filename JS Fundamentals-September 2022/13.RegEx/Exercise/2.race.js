function receInfo(input) {
  // get names
  let participants = input.shift();
  // build patterns from RegExp
  let namePattern = /[A-Za-z]+/g;
  let distancePattern = /[0-9]+/g;
  // create obkect to store data later in
  let obj = {};
  // get first line of the input
  let line = input.shift();

  while (line !== "end of race") {
    let currentName = line.match(namePattern).join("");
    let currentNumber = line.match(distancePattern).join("").split("");
    let sum = 0;
    //sum of all numbers from array
    currentNumber.forEach((num) => {
      sum += Number(num);
    });
    // if current name is in the participants
    if (participants.includes(currentName)) {
      // if current name is already in the object
      if (obj[currentName]) {
        obj[currentName] += sum;
        // if it is not
      } else {
        obj[currentName] = sum;
      }
    }
    // update the line
    line = input.shift();
  }

  // get entries and sort by value, then log it 
  let keys = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i <= 2; i++) {
    if (i == 0) {
      console.log(`${i + 1}st place: ${keys[i][0]}`);
    } else if (i == 1) {
      console.log(`${i + 1}nd place: ${keys[i][0]}`);
    } else {
      console.log(`${i + 1}rd place: ${keys[i][0]}`);
    }
  }
}

receInfo([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",

  "Mi*&^%$ch123o!#$%#nne787) ",

  "%$$B(*&&)i89ll)*&) ",

  "R**(on%^&ald992) ",

  "T(*^^%immy77) ",

  "Ma10**$#g0g0g0i0e",

  "end of race",
]);

// 2. Race
// Write a function that processes information about a race.On the first line, you will be given a list of participants separated by ", ".On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters.In between them, you could have some extra characters which you should ignore.For example: "G!32e%o7r#32g$235@!2e".The letters are the name of the person and the sum of the digits is the distance he ran.So here we have George who ran 29 km.Store the information about the person only if the list of racers contains the name of the person.If you receive the same person more than once just add the distance to his old distance.At the end print the top 3 racers ordered by distance in descending in the format:

// "1st place: {first racer}

// 2nd place: {second racer }

// 3rd place: {third racer } "
