function phoneBook(data) {
  let phoneBook = {};

  for (const entry of data) {
    let arr = entry.split(" ");
    let name = arr[0];
    let phoneNum = arr[1];

    phoneBook[name] = phoneNum;
  }

  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);


// Phone Book
// Write a function that stores information about a person’s name and phone number.The input is an array of strings with space - separated name and number.Replace duplicate names.Print the result as shown.
