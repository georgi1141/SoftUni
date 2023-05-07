function solve(data) {
  let capacity = Number(data.shift());
  let input = data.slice();

  let obj = {};

  let currentLine = input.shift();

  while (currentLine !== "Statistics") {
    let [command, arg1, arg2, arg3] = currentLine.split("=");

    if (command === "Add") {
      if (!obj[arg1]) {
        obj[arg1] = { arg2: Number(arg2), arg3: Number(arg3) };
      }
    } else if (command === "Message") {
      let sender = arg1;
      let receiver = arg2;

      if (obj[sender] && obj[receiver]) {
        obj[sender].arg2++;

        if (obj[sender].arg2 + obj[sender].arg3 >= capacity) {
          console.log(`${sender} reached the capacity!`);
          delete obj[sender];
        }
        obj[receiver].arg3++;
        if (obj[receiver].arg3 + obj[receiver].arg2 >= capacity) {
          console.log(`${receiver} reached the capacity!`);
          delete obj[receiver];
        }
      }
    } else if (command === "Empty") {
      if (obj[arg1]) {
        delete obj[arg1]
      }
      if (arg1 == "All") {
        obj = {};
      }
    }

    currentLine = input.shift();
  }

  let num = Object.keys(obj);
  console.log(`Users count: ${num.length}`);

  for (const key in obj) {
    console.log(`${key} - ${obj[key].arg2 + obj[key].arg3}`);
  }
}

solve(["20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics"])
