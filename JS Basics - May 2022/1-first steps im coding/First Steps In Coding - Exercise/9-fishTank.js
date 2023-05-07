function waterNeeded(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let d = Number(input[3]);

  let area = a * b * c;
  let areaLiters = area * 0.001;
  let usedSpace = 0.17;
  let litersNeeded = areaLiters * (1 - usedSpace);

  console.log(litersNeeded);
}

waterNeeded([85, 75, 47, 17]);
