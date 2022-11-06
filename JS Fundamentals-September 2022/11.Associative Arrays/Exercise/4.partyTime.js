function listOfGests(params) {

  let vip = [];
  let regular = [];
  let current = params.shift();

  while (current !== "PARTY") {
    // setting apart VIP and regular gests in separate arrays
    let firstElement = current.charAt(0);
    if (firstElement >= "0" && firstElement <= "9") {
      vip.push(current);
    } else {
      regular.push(current);
    }
    current = params.shift();
  }
  // checking if the rest of the geests in the input after PARTY command are in the VIP or regular list
  for (let index = 0; index < params.length; index++) {
    let firstElement = params[index].charAt(0);
    if (firstElement >= "0" && firstElement <= "9") {
      if (vip.includes(params[index])) {
        let i = vip.indexOf(params[index]);
        vip.splice(i, 1);
      }
    } else {
      if (regular.includes(params[index])) {
        let i = regular.indexOf(params[index]);
        regular.splice(i, 1);
      }
    }
  }

  console.log(vip.length + regular.length);
  vip.forEach((element) => {
    console.log(element);
  });
  regular.forEach((element) => {
    console.log(element);
  });
}

listOfGests(['m8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ'
]);

// Party Time
// There is a party at SoftUni.Many guests are invited and they are two types: VIP and regular.When guests come to the party check if he / she contains in any of the two reservation lists.

// The input will come as an array of strings.You will be given the list with the guests before you receive a command "PARTY".

// All VIP numbers start with a digit.

// When you receive the command "PARTY", the guests start coming.

// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

// Hint: Guest names are not unique.Only the first match is removed when receiving a name.
