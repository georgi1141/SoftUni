function refactor(word, sentance) {
  word = word.toLowerCase()
  sentance = sentance.toLowerCase();
  let toArr = sentance.split(' ')
  let isFound = true

  for (const currentWord of toArr) {
    if (currentWord === word) {
      console.log(currentWord);
      return
    } else {
      isFound = false
    }
  }
  if (!isFound) {
    console.log(`${word} not found!`);
  }
}
//   if (lowerCaseSentance.includes(word)) {
//     console.log(word);
//     return
//   } else {
//     console.log(`${word} not found!`);
//   }
// }

refactor("javascript", "JavaScript is the best programming language");

// 4. String Substring
// The input will be given as two separated strings(a word as a first parameter and a text as a second).

// Write a function that checks given text for containing a given word.The comparison should be case insensitive.Once you find a match, print the word and stop the program.

// If you don't find the word print: "{word} not found!"
