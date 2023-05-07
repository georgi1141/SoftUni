function solve(data) {
  //convert data array into string
  data = data.shift();
  // build RegExp pattern
  let pattern = /(\@|\#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/gm;
  //get all matches`s itarator
  let matches = data.matchAll(pattern);
  // create counter words(ordinary and mirrored) and array to store valid mirror words
  let counter = 0;
  let mirrorWordCounter = 0;
  let mirrorWords = [];
  // itarate through the matches`s iterator
  for (const match of matches) {
    counter++;
    let word = match.groups.word1;
    let reversedWord = reverseString(match.groups.word2);
    //compare values to see if we have a valid mirror match
    if (word === reversedWord) {
      mirrorWordCounter++;
      mirrorWords.push(word + ' <=> ' + match.groups.word2);
    }
  }
  //print on the console depending on the conditions
  if (counter) {
    console.log(`${counter} word pairs found!`);
    if (mirrorWordCounter) {
      console.log(`The mirror words are:\n${mirrorWords.join(", ")}`);
    } else {
      console.log("No mirror words!");
    }
  } else {
    console.log(`No word pairs found!\nNo mirror words!`);
  }
  // reusable function to reverse a string
  function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
}

solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("----------------------");
solve(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("----------------------");
solve(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);

// The SoftUni Spelling Bee competition is here.But it`s not like any other Spelling Bee competition out there. It`s different and a lot more fun! You, of course, are a participant, and you are eager to show the competition that you are the best, so go ahead, learn the rules and win!

// On the first line of the input, you will be given a text string.To win the competition, you have to find all hidden word pairs, read them, and mark the ones that are mirror images of each other.

// First of all, you have to extract the hidden word pairs.Hidden word pairs are:

// • Surrounded by "@" or "#"(only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne @@wordTwo @
// • At least 3 characters long each(without the surrounding symbols)
// • Made up of letters only
// If the second word, spelled backward, is the same as the first word and vice versa(casing matters!), they are a match, and you have to store them somewhere.Examples of mirror words:

// #Part##traP# @leveL @@Level @#sAw##wAs#

// • If you don`t find any valid pairs, print: "No word pairs found!"
// • If you find valid pairs print their count: "{valid pairs count} word pairs found!"
// • If there are no mirror words, print: "No mirror words!"
// • If there are mirror words print:
// "The mirror words are:

// {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}"

// Input / Constraints
// • You will recive a string.
// Output
// • Print the proper output messages in the proper cases as described in the problem description.
// • If there are pairs of mirror words, print them in the end, each pair separated by ", ".
// • Each pair of mirror word must be printed with " <=> " between the words.
