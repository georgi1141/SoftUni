function cityParse(input) {
  for (const key of Object.keys(input)) {
    console.log(`${key} -> ${input[key]}`);
  }
}

cityParse({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});


// 2.City

// Write a function that receives a single parameter – an object, containing five properties:

// { name, area, population, country, postcode }

// Loop through all the keys and print them with their values in format: "{key} -> {value}"

// See the examples below.