function calcBonus(data) {
  let numStudents = Number(data.shift());
  let numLectures = Number(data.shift());
  let bonus = Number(data.shift());
  let totalBonusAll = [];

  for (let i = 0; i < numStudents; i++) {
    // {total bonus } = {student attendances } / {course lectures} * (5 + {additional bonus})
    let totalBonus = (data[i] / numLectures) * (5 + bonus);
    totalBonusAll.push(Number(totalBonus));
  }

  let maxValue = Math.max(...totalBonusAll);
  let index = totalBonusAll.indexOf(maxValue)

  console.log(`Max Bonus: ${Math.ceil(maxValue)}.`);
  console.log(`The student has attended ${data[index]} lectures.`);
}

calcBonus(["5", "25", "30", "12", "19", "24", "16", "20"]);

calcBonus([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
