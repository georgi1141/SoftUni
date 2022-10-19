function modify(params) {
  let arr = params
    .shift()
    .split(" ")
    .map((x) => Number(x));

  let command = params.shift().split(" ");

  let firstElement = command[0];

  while (firstElement !== "end") {
    let secondElement = Number(command[1]);
    let thirdElement = Number(command[2]);

    if (firstElement == "swap") {
      let swapLeft = Number(arr.slice(secondElement, secondElement + 1));
      let swapRight = Number(arr.slice(thirdElement, thirdElement + 1));
      arr.splice(secondElement, 1, swapRight);
      arr.splice(thirdElement, 1, swapLeft);
    } else if (firstElement == "multiply") {
      arr.splice(secondElement, 1, arr[secondElement] * arr[thirdElement]);
    } else if (firstElement == "decrease") {
      arr = arr.map((x) => x - 1);
    }

    command = params.shift().split(" ");
    firstElement = command[0];
  }

  console.log(arr.join(", "));
}

modify([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

modify([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
