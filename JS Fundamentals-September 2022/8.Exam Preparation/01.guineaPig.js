function calcSupply(params) {
  let inGrams = 1000;
  let quantityFood = Number(params.shift()) * inGrams;
  let quantityHay = Number(params.shift()) * inGrams;
  let quantityCover = Number(params.shift()) * inGrams;
  let pigWeight = Number(params.shift()) * inGrams;
  let month = 30;

  for (let i = 1; i <= month; i++) {

    quantityFood -= 300;

    if (i % 2 == 0) {
      quantityHay -= quantityFood * 0.05;
    }
    if (i % 3 == 0) {
      quantityCover -= pigWeight / 3;
    }
    if (quantityFood <= 0 || quantityHay <= 0 || quantityCover <= 0) {
      return console.log(`Merry must go to the pet store!`);
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(quantityFood / 1000).toFixed(
      2
    )}, Hay: ${(quantityHay / 1000).toFixed(2)}, Cover: ${(
      quantityCover / 1000
    ).toFixed(2)}.`
  );
}

calcSupply(["10", "5", "5.2", "1"]);
