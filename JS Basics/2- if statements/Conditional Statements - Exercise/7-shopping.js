function sum(input) {
  let budget = Number(input[0]);
  let GPU = Number(input[1]);
  let CPU = Number(input[2]);
  let RAM = Number(input[3]);

  let GPUPrice = GPU * 250;
  let CPUPrice = CPU * (GPUPrice * 0.35);
  let RAMPrice = RAM * (GPUPrice * 0.1);

  let result = GPUPrice + CPUPrice + RAMPrice;

  if (GPU > CPU) {
    result *= 0.85;
  }

  if (budget >= result) {
    console.log(`You have ${(budget - result).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(result - budget).toFixed(2)} leva more!`
    );
  }
}
sum(["920.45", "3", "1", "1"]);
