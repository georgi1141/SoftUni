function count(sentance, word) {
  let counter = 0;
  let toArr = sentance.split(" ");

  toArr.forEach((element) => {
    element === word ? counter++ : null;
  });

  console.log(counter);
}

count(
  "This is a word and it also is a sentence",

  "is"
);

// 4. Count String Occurrences

// Write a function that receives a text and a single word that you need to search.Print the number of all occurrences of this word in the text.
