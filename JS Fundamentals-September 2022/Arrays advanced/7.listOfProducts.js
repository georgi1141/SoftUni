function printSorted(products) {

  //sorting the array
  let sorted = products.sort();

  //printing number and every value of the array
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}

printSorted(["Potatoes", "Tomatoes", "Onions", "Apples"]);
