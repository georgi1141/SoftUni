// getting 70/100 and can not find out why


function solve(input) {
  // pattern to get all nums in the text
  let patternNums = /\d/gm
  // pattern to get the emojis out of the text
  let pattern = /(?<emoji>([:|*]{2})[A-Z][a-z]{2,}\2)/gm
  // patern to separate the emojis from the special symbols - '::' and '**'
  let getWordOnly = /\w/g
  // counter for the valid emojis
  let emojiCounter = 0
  // container for the emojis so I can collect it and print it at the end
  let emojiContainer = []
  // convert the array into string and get all matches
  let toStr = input.shift()
  let matches = toStr.matchAll(pattern)
  // calc the threshold
  let threshold = toStr.match(patternNums)
  let sumThreshold = 1
  for (let i = 0; i < threshold.length; i++) {
    sumThreshold *= threshold[i]
  }

  for (const match of matches) {
    emojiCounter++
    // getting the current emoji-word but without the '::' and '**'
    let currentEmoji = match.groups.emoji.match(getWordOnly).join('')
    let currentEmobiSplitted = currentEmoji.split('')
    let sumEmoji = 0
    // loopinh throgh the splitted word to calc all the ASCII char valiues in a current word
    for (let i = 0; i < currentEmobiSplitted.length; i++) {
      sumEmoji += currentEmobiSplitted[i].charCodeAt(0)
    }
    if (sumEmoji > sumThreshold) {
      emojiContainer.push(match.groups.emoji)
    }
  }
  // log collected data as needed

  console.log(`Cool threshold: ${sumThreshold}`);
  console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
  if (!emojiContainer.length == 0) {
    console.log(emojiContainer.join('\n'));
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