function sum(input) {
  let movie = input[0];
  let movieDuration = Number(input[1]);
  let breakDuration = Number(input[2]);

  let lunchDuration = breakDuration / 8;
  let relaxDuration = breakDuration / 4;
  let timeLeft = breakDuration - lunchDuration - relaxDuration;

  if (timeLeft >= movieDuration) {
    console.log(
      `You have enough time to watch ${movie} and left with ${Math.ceil(
        timeLeft - movieDuration
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${movie}, you need ${Math.ceil(
        movieDuration - timeLeft
      )} more minutes.`
    );
  }
}
sum(["Teen Wolf", "48", "60"]);
