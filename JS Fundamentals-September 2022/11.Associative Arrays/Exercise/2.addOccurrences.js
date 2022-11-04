function extraction(data) {
  let splitted = data.split(" ").map((x) => x.toLowerCase());
  let Obj = {};

  splitted.forEach((element) => {
    if (!Obj[element]) {
      Obj[element] = 1;
    } else {
      Obj[element]++;
    }
  });

  let entries = Object.entries(Obj).sort((a, b) => b[1] - a[1]);
  let buffer = [];
  for (const [key, value] of entries) {
    if (value % 2 == 1) {
      buffer.push(key);
    }
  }

  console.log(buffer.join(" "));
}

extraction("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

// Odd Occurrences
// Write a function that extracts the elements of a sentence, if it appears an odd number of times(case -insensitive).

// The input comes as a single string.The words will be separated by a single space.
