// get element between specific chars in string

let someString = " user name [25] is cool";

let index1 = someString.indexOf("[");
let index2 = someString.indexOf("]");

let trimmed = someString.slice(index1 + 1, index2);

console.log(index1, index2, trimmed);

// destructuring an array without split method
let arr = [1, 2, 3];
let [x, y, c] = arr;
console.log(x, y, c);

// destructuring an Object

let someObj = {
  name: "gogo",
  age: 5,
};
// with variable having same name as object key
let { name } = someObj;
//setting new name to variables instead of having the key object as a name
let { age: myAge } = someObj;

console.log(myAge, name);
