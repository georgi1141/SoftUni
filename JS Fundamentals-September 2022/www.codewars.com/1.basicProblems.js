// Check if a given word is palindrome (case insensitive).

function isPalindrome(x) {
  x = x.toLowerCase()
  let y = x.split('').reverse().join('')
  return true ? x === y : false
}

console.log(isPalindrome('Bob'));
