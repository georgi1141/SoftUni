function refactor(sentance) {
  let wordsArr = sentance.split(" ");
  for (const word of wordsArr) {
    if (word.startsWith("#") && word.length > 1) {
      let isLetter = true;
      let temp = "";
      for (let i = 1; i < word.length; i++) {
        let char = word[i].toLowerCase();
        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
          isLetter = false;
          break;
        } else {
          temp += char;
        }
      }
      if (isLetter) {
        console.log(word.slice(1));
      }
    }
  }
}

refactor("Nowadays everyone uses # to tag a #special word in #socialMedia");

// 2.Modern Times of #(HashTag)
// The input will be a single string.

// Find all special words starting with #.If the found special word does not consist only of letters, then it is invalid and should not be printed.

//   Finally, print out all the special words you found without the label(#) on a new line.
