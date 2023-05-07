function convert(data) {
  let person = JSON.parse(data);



  for (const key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');

// 3. Convert to Object

// Write a function that receives a string in JSON format and converts it to an object.

// Loop through all the keys and print them with their values in format: "{key}: {value}"
