function supplies(input) {
  let pencils = Number(input[0]);
  let markers = Number(input[1]);
  let solution = Number(input[2]);
  let discount = Number(input[3]) / 100;

  let sum = pencils * 5.8 + markers * 7.2 + solution * 1.2;
  let discountSum = sum - sum * discount;
  console.log(discountSum);
}

supplies(["2", "3", "4", "25"]);
