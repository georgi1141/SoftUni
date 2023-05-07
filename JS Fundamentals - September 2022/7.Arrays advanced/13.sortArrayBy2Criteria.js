function sorting(input) {

  let sortedArr = input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b)
  })
  console.log(sortedArr.join('\n'));
}

sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])