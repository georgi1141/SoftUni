function time(input) {
  let hour = Number(input[0]);
  let min = Number(input[1]) + 15;

  if (min > 59) {
    hour += 1;
    min -= 60;
  }

  if (hour > 23) {
    hour = hour - 24;
  }

  if (min < 10) {
    console.log(`${hour}:0${min}`);
  } else {
    console.log(`${hour}:${min}`);
  }
}
time(["1", "46"]);
