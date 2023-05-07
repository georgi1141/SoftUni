function solve(data) {
  let info = {};


  data.forEach((element) => {
    let [company, id] = element.split(" -> ");

    if (!info[company]) {
      info[company] = [id];
    } else {
      if (!info[company].includes(id)) {
        info[company] = info[company].concat(id);
      }
    }
  });

  let entries = Object.entries(info).sort((a, b) => a[0].localeCompare(b[0]));
  entries.forEach((element) => {
    let company = element[0];
    console.log(company);
    let employees = element[1];
    for (let i = 0; i < employees.length; i++) {
      console.log(`-- ${employees[i]}`);
    }
  });
}

solve([
  "SoftUni -> AA12345",

  "SoftUni -> CC12344",

  "Lenovo -> XX23456",

  "SoftUni -> AA12345",

  "Movement -> DD11111",
]);

// Company Users
// Write a function, which keeps the information about companies and their employees.

// You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.

// When you finish reading data, order the companies by their name in ascending order.

// Print the company name and each employee's id in the following format:

// { companyName }

// --{ id1 }

// --{ id2 }

// --{ idN }

// Input / Constraints
// • The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// • The input always will be valid.
