function equipement(input) {
  let a = Number(input[0]);

  let shoes = a - (40 / 100) * a;
  let clothes = shoes - (20 / 100) * shoes;
  let ball = clothes - (75 / 100) * clothes;
  let accessories = ball - (80 / 100) * ball;
  let sum = a + shoes + clothes + ball + accessories;

  console.log(sum);
}

equipement([365]);
