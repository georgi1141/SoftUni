function solve(arr) {
  arr
    .sort((a, b) => a.localeCompare(b))
    .forEach((element, i) => {
      console.log(`${i + 1}.${element}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);

// You will receive an array of names.Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
