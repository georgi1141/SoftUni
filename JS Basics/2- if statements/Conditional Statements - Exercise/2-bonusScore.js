function demo(input) {
  let score = Number(input[0]);
  let bonus;
  let finalScore;

  if (score <= 100) {
    bonus = 5;
    finalScore = score + bonus;
  } else if (score > 100 && score < 1000) {
    bonus = score * 0.2;
    finalScore = score + bonus;
  } else {
    bonus = score * 0.1;
    finalScore = score + bonus;
  }

  if (score % 2 === 0) {
    bonus += 1;
    finalScore = score + bonus;
  } else if (score % 10 === 5) {
    bonus += 2;
    finalScore = score + bonus;
  }
  console.log(bonus);
  console.log(finalScore);
}
demo(["17"]);
