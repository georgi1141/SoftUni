function generateSequence(length, K) {
  let sequence = [1]

  for (let i = 1; i < length; i++) {
    let index = Math.max(sequence.length - K, 0)

    let lastElements = sequence.slice(index)
    let sum = 0
    for (const iterator of lastElements) {
      sum += iterator
    }
    sequence.push(sum)
  }

  console.log(sequence.join(' '));
}



generateSequence(6, 3)