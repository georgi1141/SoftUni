function solveMe(fName, lName, hairColor) {
  let person = {
    name: fName,
    lastName: lName,
    hairColor: hairColor,
  };

  let convert = JSON.stringify(person);
  console.log(convert);
}

solveMe(
  "George",
  "Jones",

  "Brown"
);
