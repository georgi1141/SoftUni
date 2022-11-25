function solve(data) {
  let numCras = Number(data.shift());
  let cars = {};
  for (let i = 0; i < numCras; i++) {
    let [brand, mileage, fuel] = data.shift().split("|");
    cars[brand] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }
  let [command, brand, arg1, arg2] = data.shift().split(" : ");
  while (command !== "Stop") {
    switch (command) {
      case "Drive":
        if (cars[brand].fuel >= Number(arg2)) {
          cars[brand].mileage += Number(arg1);
          cars[brand].fuel -= Number(arg2);
          console.log(
            `${brand} driven for ${arg1} kilometers. ${arg2} liters of fuel consumed.`
          );
          if (cars[brand].mileage > 100000) {
            console.log(`Time to sell the ${brand}!`);
            delete cars[brand];
            break;
          }
        } else {
          console.log("Not enough fuel to make that ride");
        }
        break;
      case "Refuel":
        if (cars[brand].fuel + Number(arg1) > 75) {
          console.log(
            `${brand} refueled with ${75 - Number(cars[brand].fuel)} liters`
          );
          cars[brand].fuel = 75;
        } else {
          console.log(`${brand} refueled with ${arg1} liters`);
          cars[brand].fuel += Number(arg1);
        }
        break;
      case "Revert":
        cars[brand].mileage -= Number(arg1);
        if (cars[brand].mileage < 10000) {
          cars[brand].mileage = 10000;
        } else {
          console.log(`${brand} mileage decreased by ${arg1} kilometers`);
        }
        break;
    }
    [command, brand, arg1, arg2] = data.shift().split(" : ");
  }
  for (const key in cars) {
    let mileage = cars[key].mileage;
    let fuel = cars[key].fuel;
    console.log(
      `${key} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`
    );
  }
}

solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
console.log("-------------------");

solve([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);

// You have just bought the latest and greatest computer game – Need for Seed III.Pick your favorite cars and drive them all you want! We know that you can't wait to start playing.

// On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain.On the next n lines, the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:

// "{car}|{mileage}|{fuel}"

// Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:

// • "Drive : {car} : {distance} : {fuel}":
// o You need to drive the given distance, and you will need the given fuel to do that.If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
// o If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print:
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// o You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"
// • "Refuel : {car} : {fuel}":
// o Refill the tank of your car.
// o Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up.
// o Print a message in the following format: "{car} refueled with {fuel} liters"
// • "Revert : {car} : {kilometers}":
// o Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// o If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and
// DO NOT print anything.
// Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

// Input / Constraints
// • The mileage and fuel of the cars will be valid, 32 - bit integers, and will never be negative.
// • The fuel and distance amounts in the commands will never be negative.
// • The car names in the commands will always be valid cars in your possession.
//   Output
// • All the output messages with the appropriate formats are described in the problem description.
