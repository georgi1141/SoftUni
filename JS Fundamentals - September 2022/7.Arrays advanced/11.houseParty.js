function partyList(input) {
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    let [name, positive, negative, going] = input[i].split(" ");
    if (negative === "going!" && !newArr.includes(name)) {
      newArr.push(name);
    } else if (negative === "going!" && newArr.includes(name)) {
      console.log(`${name} is already in the list!`);
    } else if (negative === "not" && newArr.includes(name)) {
      newArr.splice(newArr.indexOf(name), 1)
    } else {
      console.log(`${name} is not in the list!`);
    }
  }
  for (const name of newArr) {
    console.log(name);
  }
}

partyList([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

partyList(["Tom is going!", "Annie is going!", "Tom is going!", "Garry is going!", "Jerry is going!",]);
