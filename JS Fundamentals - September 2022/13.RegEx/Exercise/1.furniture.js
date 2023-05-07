function calcCost(data) {
  // getting first line 
  let item = data.shift();
  // valid pattern
  let isValid = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+.?\d+)!(?<quantity>\d+)/g;

  console.log("Bought furniture:");

  let sum = 0;

  while (item !== "Purchase") {
    // if we have a match
    if (item.match(isValid)) {
      // getting array of the groups
      let match = isValid.exec(item);
      console.log(match.groups.name);
      // adding yo the sum
      sum += Number(match.groups.price) * Number(match.groups.quantity);
    }
    // updating the line
    item = data.shift();
  }

  console.log(`Total money spend: ${sum.toFixed(2)}`);
}

calcCost([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

console.log("---------------------");

calcCost([
  ">>Laptop<<312.2323!3",

  ">>TV<<300.21314!5",

  ">Invalid<<!5",

  ">>TV<<300.21314!20",

  ">>Invalid<!5",

  ">>TV<<30.21314!5",

  ">>Invalid<<!!5",

  "Purchase",
]);
console.log("-------------");
calcCost([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);

// 1. Furniture
// Write a function to calculate the total cost of different types of furniture.You will be given some lines of input until you receive the line "Purchase".For the line to be valid it should be in the following format:

// ">>{furniture name}<<{price}!{quantity}"

// The price can be a floating - point number or a whole number.Furniture items must start with a capital letter.Store the names of the furniture and the total price.At the end print each bought furniture on a separate line in the format:

// "Bought furniture:

// { 1st name }

// { 2nd name }

// …"

// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second decimal point.

// If there are not valid furniture print only:

// Bought furniture:

// Total money spend: {spend money }
