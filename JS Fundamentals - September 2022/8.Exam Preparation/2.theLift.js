// -----------------90/100---------------//


function findPlace(input) {
  let pplWaiting = Number(input.shift());
  let wagons = input[0].split(" ").map(Number);
  let maxPpl = 4;
  let totalAvailable = wagons.length * maxPpl


  for (let i = 0; i < wagons.length; i++) {

    let currentWagon = Number(wagons[i]);
    let pplToEnter = maxPpl - currentWagon;


    if (pplToEnter >= pplWaiting) {
      pplToEnter = pplWaiting;
    }

    if (currentWagon < pplWaiting) {
      wagons[i] = pplToEnter + currentWagon;
      pplWaiting -= pplToEnter;
    }
    if (pplWaiting <= 0) {
      pplWaiting = 0
      break;
    }
  }

  if (pplWaiting === 0) {
    if (totalAvailable > 0) {
      console.log(`The lift has empty spots!`);
    }
  } else {
    console.log(`There isn't enough space! ${pplWaiting} people in a queue!`);
  }

  console.log(wagons.join(' '));
}

findPlace(["15", "0 0 0 0 0"]);

findPlace(["20", "0 2 0"])



// Problem 2 - The Lift
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2517#1.
 

// Write a program that finds a place for the tourist on a lift. 

// Every wagon should have a maximum of 4 people on it.If a wagon is full, you should direct the people to the next one with space available.

//   Input
// • On the first line, you will receive how many people are waiting to get on the lift
// • On the second line, you will receive the current state of the lift separated by a single space: " ".
//   Output
// When there is no more available space left on the lift, or there are no more people in the queue, you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:

// • If there are no more people and the lift have empty spots, you should print:
// "The lift has empty spots!

// {wagons separated by ' ' } "

// • If there are still people in the queue and no more available space, you should print:
// "There isn't enough space! {people} people in a queue!

// {wagons separated by ' ' } "

// • If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "