function solve(text) {
  // array to string
  text = text.toString();
  // pattern for finding the word
  let patternEm = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
  // pattern for finding the number
  let numPattern = /(?<num>[0-9]+)/g;
  //get all numbers and store it in a string
  let allFindNum = text.match(numPattern);
  let coolFindedDig = '';
  for (let digit of allFindNum) {
    coolFindedDig += digit
  }
  // multiply in ortder to find the cool count and print the needed messaage 
  let coolCount = 1;
  for (let plus of coolFindedDig) {
    coolCount *= Number(plus)
  }
  console.log(`Cool threshold: ${coolCount}`)
  // get all the words with their symbols
  let count = text.match(patternEm)
  console.log(`${count.length} emojis found in the text. The cool ones are:`)
  for (let emo of count) {
    let currentCoolCount = 0;
    // find if an emoji is valid by calculating their ASCII values of all letters
    for (let i = 2; i < emo.length - 2; i++) {
      currentCoolCount += emo[i].charCodeAt();
    }
    if (currentCoolCount >= coolCount) {
      console.log(emo)
    }
  }
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('------------------------------------');
solve((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]))


console.log('------------------------------------');

solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])




// Your task is to write a program that extracts emojis from a text and find the threshold based on the input.

// You have to get your cool threshold.It is obtained by multiplying all the digits found in the input.The cool threshold could be a huge number, so be mindful.

// An emoji is valid when:

// • It is surrounded by 2 characters, either "::" or "**"
// • It is at least 3 characters long(without the surrounding symbols)
// • It starts with a capital letter
// • Continues with lowercase letters only
// Examples of valid emojis: :: Joy::, ** Banana **, :: Wink::

// Examples of invalid emojis: :: Joy **, :: fox: es:, ** Monk3ys **, : Snak:: Es::

// You need to count all valid emojis in the text and calculate their coolness.The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji.

//   Examples: :: Joy:: - 306, ** Banana ** - 577, :: Wink:: - 409

// You need to print the result of the cool threshold and, after that to take all emojis out of the text, count them and print only the cool ones on the console.

//   Input
// • On the single input, you will receive a piece of string.
//   Output
// • On the first line of the output, print the obtained Cool threshold in the format:
// "Cool threshold: {coolThresholdSum}"
// • On the following line, print the count of all emojis found in the text in format:
// "{countOfAllEmojis} emojis found in the text. The cool ones are:

// {cool emoji 1 }

// {cool emoji 2 }

// …

// {cool emoji N } "

// Constraints
// There will always be at least one digit in the text!