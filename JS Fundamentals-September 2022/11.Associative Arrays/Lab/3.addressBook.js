function book(data) {
  let addressBook = {};

  data.forEach((element) => {
    let [name, address] = element.split(":");
    addressBook[name] = address;
  });

  let entries = Object.entries(addressBook).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const iterator of entries) {
    console.log(`${iterator[0]} -> ${iterator[1]}`);
  }
}

book([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);

// Address Book
// Write a function that stores information about a person’s name and his address.The input comes as an array of strings.Each string contains the name and the address separated by a colon.If you receive the same name twice just replace the address.In the end, print the full list, sorted alphabetically by the person’s name.
