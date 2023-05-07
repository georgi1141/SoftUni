function print(arr, str) {

  let buffer = []
  for (const iterator of arr) {
    buffer.push(iterator)
  }

  console.log(buffer.join(str));

}


print(['One',
  'Two',
  'Three',
  'Four',
  'Five'],
  '-')



// The input comes as two parameters – an array of strings and a string.The second parameter is the delimiter.

// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.
