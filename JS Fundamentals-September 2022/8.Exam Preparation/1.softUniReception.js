function calcTime(params) {
  let employeeOne = Number(params.shift());
  let employeeTwo = Number(params.shift());
  let employeeThree = Number(params.shift());
  let students = Number(params.shift());
  let counter = 0;

  let studentsPerHour = employeeOne + employeeTwo + employeeThree;

  while (students > 0) {
    students -= studentsPerHour;
    counter++;
    if (counter % 4 == 0) {
      counter++;
      continue;
    }
  }

  console.log(`Time needed: ${counter}h.`);
}

calcTime(["5", "6", "4", "20"]);

calcTime(["1", "2", "3", "45"]);
