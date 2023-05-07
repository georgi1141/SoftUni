function sumSmallestTwo(array) {
  array.sort((a, b) => a - b).splice(2);

  console.log(array.join(" "));
}

sumSmallestTwo([30, 15, 50, 5]);
