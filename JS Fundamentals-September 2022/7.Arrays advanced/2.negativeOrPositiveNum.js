function numRefactoring(params) {
  let newArr = [];
  for (const number of params) {
    let num = Number(number);
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }

  for (const num of newArr) {
    console.log(num);
  }
}

numRefactoring(["7", "-2", "8", "9"]);
