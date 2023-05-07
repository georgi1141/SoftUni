function solve(params) {
  let words = {};
  solve();
  function solve() {
    for (let el of params) {
      if (!words.hasOwnProperty(el)) {
        words[el] = 1;
      } else {
        words[el] += 1;
      }
    }
  }
  let valueArray = [];
  for (let key in words) {
    valueArray.push(words[key]);
  }
  valueArray.sort((a, b) => b - a);
  let unique = new Set(valueArray);
  for (let num of unique) {
    for (let word in words) {
      if (words[word] === num) {
        console.log(`${word} -> ${num} times`);
      }
    }
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);

// Word Occurrences
// Write a function that counts the times each word occurs in a text.Print the words sorted by count in descending order.The input comes as an array of strings.
