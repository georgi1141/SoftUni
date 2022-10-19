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
