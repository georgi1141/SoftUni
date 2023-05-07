function refactor(string) {
  let result = string[0];
  let lower = string.toLowerCase();

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== lower[i]) {
      result += ", ";
    }
    result += string[i];
  }
  console.log(result);
}

refactor("HoldTheDoor");



// 6. Pascal - Case Splitter
// You will receive a single string.

// This string is written in PascalCase format.Your task here is to split this string by every word in it.

// Print them joined by comma and space.