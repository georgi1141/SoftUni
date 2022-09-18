function spenditure(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let d = Number(input[3]);

  let sumNilon = (a + 2) * 1.5;
  let sumPaint = (b + b * 0.1) * 14.5;
  let alcohol = c * 5;
  let bags = 0.4;
  let sumAll = sumNilon + sumPaint + alcohol + bags;
  let sumLabor = sumAll * 0.3 * d;
  let total = sumLabor + sumAll;
  console.log(total);
}

spenditure([10, 11, 4, 8]);
