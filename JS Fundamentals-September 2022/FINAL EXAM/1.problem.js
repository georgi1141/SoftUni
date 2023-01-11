function pass(data) {
  let pass = data.shift();

  let commands = data.shift();

  while (commands !== "Complete") {
    let [command, arg1, arg2] = commands.split(" ");

    let upperLower = command + " " + arg1;

    switch (command) {
      case "Make":
        if (upperLower == "Make Upper") {
          let toReplace = pass
            .substring(Number(arg2), Number(arg2) + 1)
            .toUpperCase();
          pass =
            pass.substring(0, Number(arg2)) +
            toReplace +
            pass.substring(Number(arg2) + 1);
          console.log(pass);
        } else if (upperLower == "Make Lower") {
          let toReplace = pass
            .substring(Number(arg2), Number(arg2) + 1)
            .toLowerCase();
          pass =
            pass.substring(0, Number(arg2)) +
            toReplace +
            pass.substring(Number(arg2) + 1);
          console.log(pass);
        }
        break;
      case "Insert":
        if (pass.indexOf(arg2)) {

          pass = pass.substring(0, Number(arg1)) + arg2 + pass.substring(Number(arg1));
          console.log(pass);
        }
        break;
      case "Replace":
        if (pass.includes(arg1)) {
          let index = pass.indexOf(arg1);
          let ascii = pass.charCodeAt(index);
          let sum = Number(ascii) + Number(arg2);
          let newAscii = String.fromCharCode(sum);
          let newStr = "";
          for (let i = 0; i < pass.length; i++) {
            if (pass[i] === arg1) {
              newStr += newAscii;
              continue;
            }
            newStr += pass[i];
          }
          pass = newStr;
          console.log(pass);
        }
        break;
      case "Validation":
        if (pass.length < 8) {
          console.log("Password must be at least 8 characters long!");
        }
        let pattern = /[\da-z_]+/gm;
        if (!pattern.test(pass)) {
          console.log("Password must consist only of letters, digits and _!");
        }
        let patternOne = /[A-Z]+/gm;
        if (!patternOne.test(pass)) {
          console.log("Password must consist at least one uppercase letter!");
        }
        let patternTwo = /[a-z]+/gm;
        if (!patternTwo.test(pass)) {
          console.log("Password must consist at least one lowercase letter!");
        }
        let patternThree = /[\d]+/gm;
        if (!patternThree.test(pass)) {
          console.log("Password must consist at least one digit!");
        } 

        break;
    }

    commands = data.shift();
  }
}

pass([
  "invalidpassword*",
  "Add 2 p",
  "Replace i -50",
  "Replace * 10",
  "Make Upper 2",
  "Validation",
  "Complete",
]);

console.log("---------------");

pass([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
