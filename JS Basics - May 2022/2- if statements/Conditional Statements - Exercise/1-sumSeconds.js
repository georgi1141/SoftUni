function sum(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);

  let sumTime = a + b + c;

  let min = Math.floor(sumTime / 60);
  let sec = sumTime % 60;

  if (sec < 10) {
    console.log(`${min}:0${sec}`);
  } else {
    console.log(`${min}:${sec}`);
  }
}
sum(["32", "53", "45"]);
