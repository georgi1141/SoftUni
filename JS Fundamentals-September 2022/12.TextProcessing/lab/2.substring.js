function printWoerd(word, startIndex, endIndex) {
  let result = word.substring(startIndex, endIndex + startIndex)
  console.log(result);
}
printWoerd('SkipWord', 4, 7)


// 2.Substring

// Write a function that receives a string and two numbers.The numbers will be a starting index and count of elements to substring.Print the result.