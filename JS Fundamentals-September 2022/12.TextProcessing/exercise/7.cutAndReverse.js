function refactor(string) {
  let middleIndex = string.length / 2;

  let firstHalf = string.slice(0, middleIndex).split("").reverse().join("");
  let secondHalf = string.slice(middleIndex).split("").reverse().join("");

  console.log(firstHalf);
  console.log(secondHalf);
}

refactor("tluciffiDsIsihTgnizamAoSsIsihT");

// 7. Cut and Reverse
// The input will be a single string.

// Write a function that cuts the given string into half and reverse the two halves.

// Print each half on a separate line.
