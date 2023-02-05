function sortArray(arr, value) {
  let resultArr = [];

  if (value == "asc") {
    resultArr = arr.sort((a, b) => a - b);
  } else if (value == "desc") {
    resultArr = arr.sort((a, b) => b - a);
  }

  return resultArr;
}

sortArray([14, 7, 17, 6, 8], "desc");
