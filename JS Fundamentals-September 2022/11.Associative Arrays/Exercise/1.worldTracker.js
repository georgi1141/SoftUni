function solveMe(wordArray) {
  let first = wordArray.slice(0, 1).join(' ').split(' ');
  let list = wordArray.slice(1);

  let occurrences = {};
  createObject();
  function createObject() {
    for (let el of first) {
      let counter = 0;
      for (let listEl of list) {
        if (listEl === el) {
          counter++;
        }
      }
      occurrences[el] = counter;
    }
  }
  let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1])
  for (let el of sorted) {
    let [word, count] = [el[0], el[1]];
    console.log(`${word} - ${count}`);
  }
}



// function solveMe(data) {
//   let [word1, word2] = data.shift().split(" ");
//   let counter1 = 0;
//   let counter2 = 0;
//   let Obj = {};

//   data.forEach((element) => {
//     if (word1 == element) {
//       counter1++;
//     } else if (word2 == element) {
//       counter2++;
//     }
//   });

//   Obj[word1] = counter1;
//   Obj[word2] = counter2;

//   let entries = Object.entries(Obj).sort((a, b) => b[1] - a[1]);

//   entries.forEach((element) => {
//     console.log(`${element[0]} - ${element[1]}`);
//   });
// }


solveMe([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);

// Words Tracker
// Write a function that receives an array of words and finds occurrences of given words in that sentence.

// The input will come as an array of strings.The first string will contain the words you will be looking for separated by a space.All strings after that will be the words in which you will check for a match.

// Print for each word how many times it occurs.The words should be sorted by count in descending.
