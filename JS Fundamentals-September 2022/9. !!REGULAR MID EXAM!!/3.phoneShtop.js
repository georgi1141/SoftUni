function calc(data) {
  let initList = data.shift().split(", ");
  let command = data.shift();

  while (command !== "End") {
    let [el1, el2] = command.split(" - ");

    switch (el1) {
      case "Add":
        if (!initList.includes(el2)) {
          initList.push(el2);
        }
        break;
      case "Remove":
        if (initList.includes(el2)) {
          initList = initList.filter((x) => x !== el2);
        }
        break;
      case "Bonus phone":
        let [oldPhone, newPhone] = el2.split(":");
        if (initList.includes(oldPhone)) {
          let index = initList.indexOf(oldPhone);
          initList.splice(index + 1, 0, newPhone);
        }
        break;
      case "Last":
        if (initList.includes(el2)) {
          let index = initList.indexOf(el2);
          let toReplace = initList.splice(index, 1);
          initList.push(toReplace);
        }
        break;
    }
    command = data.shift();
  }
  console.log(initList.join(", "));
}

calc([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);

console.log(`-------------------`);

calc([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
console.log(`-------------------`);
calc([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
