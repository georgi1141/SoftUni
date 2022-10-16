function search(first, second) {
  let numsToTake = second.shift();
  let numToDelete = second.shift();
  let numToFind = second.shift();

  let newArr = first.slice(0, numsToTake);
  newArr.splice(0, numToDelete);

  let counter = 0;
  for (const num of newArr) {
    if (num === numToFind) {
      counter++;
    }
  }

  console.log(`Number ${numToFind} occurs ${counter} times.`);
}

search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
