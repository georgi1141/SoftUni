function refactor(words, sentance) {
  let wordsArray = words.split(", ");

  for (const word of wordsArray) {
    const match = "*".repeat(word.length);
    sentance = sentance.replace(match, word);
  }
  console.log(sentance);
}

refactor(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

// 1. Reveal Words
// Write a function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.
