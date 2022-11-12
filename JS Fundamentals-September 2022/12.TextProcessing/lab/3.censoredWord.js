function refactorSentance(sentance, word) {
  let length = word.length;
  let star = "*";

  while (sentance.includes(word)) {
    sentance = sentance.replace(word, star.repeat(length));
  }
  console.log(sentance);
}

refactorSentance('Find the hidden word', 'hidden');

// 3. Censored Words

// Write a function that receives a text as a first parameter and a single word as a second.Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
