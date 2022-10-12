function solve(input) {

  let count = input.shift();
  let first = input.slice(0, count)
  let last = input.slice(input.length - count)
  console.log(first.join(' '));
  console.log(last.join(' '));

}

solve([2, 7, 8, 9])