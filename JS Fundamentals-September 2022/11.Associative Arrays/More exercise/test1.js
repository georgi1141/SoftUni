// restructuring array and saving to variables dinamically
let arr1 = [1, 2, 3, 4, 5, 6]

let [addEventListener, b, ...theRest] = arr1
console.log(theRest);


// same as with an object
let obj = {
  name: {
    firstName: 'sisi',
    surName: 'Ivanova'
  },
  age: 25,
  weight: 50
}

let { name, ...others } = [...obj.name.firstName]
console.log(others);

// using the spread operator to pass multiple values in function

let arr = [2]
let arr2 = [4, 5]
let arr4 = [4, 5, 5, 6]
function getSum(...nums) {
  console.log(nums);
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += Number(nums[i])

  } console.log(sum);
}

getSum(...arr2) // sum 9
getSum(...arr4) // sum 20




