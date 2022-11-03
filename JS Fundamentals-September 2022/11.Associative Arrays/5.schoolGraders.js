function calculation(data) {
  let studentBook = {};
  //push values in the object
  data.forEach((element) => {
    let command = element.split(" ");
    let name = command[0];
    let grades = command.splice(1, command.length);
    // if the name already exists push values to existing values in the array
    if (studentBook[name]) {
      studentBook[name] = studentBook[name].concat(grades);
      return;
    }
    studentBook[name] = grades;
  });
  // get the entries in order to sort
  let entries = Object.entries(studentBook).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  let sortedObj = {};
  // convert entries back to object
  entries.forEach((element) => {
    sortedObj[element[0]] = element[1];
  });

  // log the name and the avarage of grades
  for (const student in sortedObj) {
    let sum = 0;
    sortedObj[student].forEach((item) => (sum += Number(item)));

    console.log(`${student}: ${(sum / sortedObj[student].length).toFixed(2)}`);
  }
}

calculation(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
