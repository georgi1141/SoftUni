function movie(input) {
  let budget = Number(input[0]);

  let statists = Number(input[1]);
  let priceClothes = Number(input[2]);
  let decor = budget * 0.1;

  if (statists > 150) {
    priceClothes *= 0.9;
  }
  let totalSum = decor + statists * priceClothes;

  if (budget >= totalSum) {
    console.log(`Action!
Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money!
Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
  }
}

movie(["9587.88", "222", "55.68"]);
