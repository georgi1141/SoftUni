function solve(arr) {
  const result = [];

  arr.sort((a, b) => a - b);
  while (arr.length !== 0) {
    result.push(arr.shift());
    result.push(arr.pop());
  }

  return result
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.
