function refactor(word, sentance) {

  console.log(sentance.replace('*', word));


}


refactor('great',
  'softuni is ***** place for learning new programming languages')

// 1. Reveal Words
// Write a function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.