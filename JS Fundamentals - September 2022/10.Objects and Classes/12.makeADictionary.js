function parse(input) {
  let object = {};

  for (const string of input) {
    //parse string to an Object
    let toObj = JSON.parse(string);
    // insert Object to empty Object
    Object.assign(object, toObj);
  }

  // getting all keys in the Object (returns array with all keys) and then sort it *A-Z*
  let keys = Object.keys(object).sort((a, b) => a.localeCompare(b));

  keys.forEach((key) => {
    console.log(`Term: ${key} => Definition: ${object[key]}`);
  });
}

parse([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
