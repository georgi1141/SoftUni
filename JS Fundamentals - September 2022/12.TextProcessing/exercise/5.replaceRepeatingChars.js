function printRepeating(input) {
  let final = input[0];

  for (let i = 1; i < input.length; i++) {
    let current = input[i];
    let last = final.slice(-1);

    if (current !== last) {
      final += current;
    }
  }
  console.log(final);
}

printRepeating('qqqwerqwecccwd');

// 5. Replace Repeating Chars
// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.
