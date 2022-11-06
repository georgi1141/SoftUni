function parking(data) {
  let storedCars = {};

  data.forEach((element) => {
    let [numGarage, props] = element.split(" - ");

    if (!storedCars[numGarage]) {
      storedCars[numGarage] = [];
    }
    storedCars[numGarage].push(props);
  });

  let output = "";
  Object.entries(storedCars).forEach(([garage, cars]) => {
    output += `Garage № ${garage}\n`;

    for (let currCar of cars) {
      while (currCar.includes(": ")) {
        currCar = currCar.replace(": ", " - ");
      }

      output += `--- ${currCar}\n`;
    }
  });
  console.log(output);
}

parking([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

// Garage
// Write a function that stores cars in garages.You will be given an array of strings.Each string will contain a number of a garage and info about a car.You have to store the car(with its info) in the given garage.The info about the car will be in the format:

// "{key1}: {value1}, {key2}: {value2}…"

// If the garage does not exist, create it.The cars will always be unique.At the end print the result in the format:
// "Garage № {number}:
// --- { carOneKeyOne } - { carOneValueOne }, { carOneKeyTwo } - { carOneValueTwo }…
// --- { the same for the next car }
// Garage № { number }: …"
