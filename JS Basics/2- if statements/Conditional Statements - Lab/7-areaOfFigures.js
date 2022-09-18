function area(input) {
  let type = input[0];
  let a = Number(input[1]);
  let b = Number(input[2]);
  let c = Number(input[3]);
  let sum;

  if (type === "square") {
    sum = a * a;
  } else if (type === "rectangle") {
    sum = a * b;
  } else if (type === "circle") {
    sum = Math.PI * a * a;
  } else if (type === "triangle") {
    sum = (a * b) / 2;
  }
  console.log(sum.toFixed(3));
}

area(["triangle", "4.5", "20", "20"]);
