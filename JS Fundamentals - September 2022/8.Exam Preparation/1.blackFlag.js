function plunderColection(arr) {
  let days = Number(arr.shift());
  let plunderPerDay = Number(arr.shift());
  let expecterPlunder = Number(arr.shift());

  let totalPlunder = 0;
  // iterate the number of days
  for (let i = 1; i <= days; i++) {
    // add dayli plunder to the total plunder
    totalPlunder += plunderPerDay;
    // every third day
    if (i % 3 === 0) {
      totalPlunder += plunderPerDay * 0.5;
    }
    // every fifth day
    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }
  // if plunder is more or equal or less than the expexted
  totalPlunder >= expecterPlunder
    ? console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    : console.log(
      `Collected only ${((totalPlunder / expecterPlunder) * 100).toFixed(
        2
      )}% of the plunder.`
    );
}
plunderColection(["5", "40", "100"]);
plunderColection(["10", "20", "380"]);

// Problem 1 - Black Flag
// Link: https://judge.softuni.org/Contests/Practice/Index/1773#0

// Pirates are invading the sea, and you're tasked to help them plunder

// Create a program that checks if target plunder is reached.First, you will receive how many days the pirating lasts.Then you will receive how much the pirates plunder for a day.Last you will receive the expected plunder at the end.

// Calculate how much plunder the pirates manage to gather.Each day they gather the plunder.Keep in mind that they attack more ships every third day and add additional plunder to their total gain, which is 50 % of the daily plunder.Every fifth day the pirates encounter a warship, and after the battle, they lose 30 % of their total plunder.

// If the gained plunder is more or equal to the target, print the following:

// "Ahoy! {totalPlunder} plunder gained."

// If the gained plunder is less than the target.Calculate the percentage left and print the following:

// "Collected only {percentage}% of the plunder."

// Both numbers should be formatted to the 2nd decimal place.

//   Input
// • On the 1st line, you will receive the days of the plunder – an integer number in the range[0…100000]
// • On the 2nd line, you will receive the daily plunder – an integer number in the range[0…50]
// • On the 3rd line, you will receive the expected plunder – a real number in the range[0.0…10000.0]
// Output
// • In the end, print whether the plunder was successful or not, following the format described above. 
