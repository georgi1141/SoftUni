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
