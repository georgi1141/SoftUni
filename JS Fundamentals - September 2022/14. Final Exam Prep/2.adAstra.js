function solve(data) {
  // transforming data parameter as a string
  data = data.shift()
  // get the pattern needed
  let pattern = /(\||\#)(?<producyName>[A-Za-z]+(\s[A-Za-z]*)?)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,9}|[10000])\1/gm
  // will store total calorie and arrays with class matches so I can print it last
  let totalCalorieCount = 0
  let matchCounterName = []
  let matchCounterDate = []
  let matchCounterCalories = []
  // get all matches that will be in the data
  let matches = data.matchAll(pattern)
  // go through the iterator of matches
  for (const currentMatch of matches) {
    let item = currentMatch.groups.producyName
    let date = currentMatch.groups.date
    let calories = currentMatch.groups.calories
    matchCounterName.push(item)
    matchCounterDate.push(date)
    matchCounterCalories.push(calories)
    totalCalorieCount += Number(currentMatch.groups.calories);

  }
  //get 'how many days you can last with the food you have'
  let daysToSurvive = Math.trunc(totalCalorieCount / 2000)
  // log how many days you can last with the food you have and matches accordingly
  console.log(`You have food to last you for: ${daysToSurvive} days!`);
  for (let i = 0; i < matchCounterName.length; i++) {
    console.log(`Item: ${matchCounterName[i]}, Best before: ${matchCounterDate[i]}, Nutrition: ${matchCounterCalories[i]}`);
  }
}


solve([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
console.log('--------------------')
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
console.log('--------------------')
solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])









// Problem 2 - Ad Astra
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2525#1.

// You are an astronaut who just embarked on a mission across the solar system.Since you will be in space for a long time, you have packed a lot of food with you.Create a program, which helps you identify how much food you have left and gives you information about its expiration date.

// On the first line of the input, you will be given a text string.You must extract the information about the food and calculate the total calories.

//   First, you must extract the food info.It will always follow the same pattern rules:

// • It will be surrounded by "|" or "#"(only one of the two) in the following pattern: 
// #{item name }#{expiration date }#{ calories }#  or
//   | { item name } | { expiration date } | { calories } |
// • The item name will contain only lowercase and uppercase letters and whitespace
// • The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long
// • The calories will be an integer between 0 - 10000
// Calculate the total calories of all food items and then determine how many days you can last with the food you have.Keep in mind that you need 2000kcal a day.

//   Input / Constraints
// • You will receive a single string
// Output
// • First, print the number of days you will be able to last with the food you have:
// "You have food to last you for: {days} days!"

// • The output for each food item should look like this:
// "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"