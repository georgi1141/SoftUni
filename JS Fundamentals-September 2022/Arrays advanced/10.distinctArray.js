function removeRepeatedNums(array) {
  let newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  console.log(newArray);
}

removeRepeatedNums([1, 2, 3, 4]);
removeRepeatedNums([7, 8, 9, 7, 2, 3, 4, 1, 2]);

//--------advanced solution----------//

// function removeRepeatedNums(array) {
//   let result = [...new Set(array)];

//   console.log(result.join(' '));
// }

// removeRepeatedNums([1, 2, 3, 4]);
// removeRepeatedNums([7, 8, 9, 7, 2, 3, 4, 1, 2]);
