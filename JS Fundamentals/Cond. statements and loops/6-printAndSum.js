function printAndSum(startNum, endNum) {
    let sum = 0
    let numString = ``
    while (startNum <= endNum) {
        numString += ` ${startNum}`
        sum += startNum
        startNum++
    }
    console.log(numString.trim())
    console.log(`Sum: ${sum}`);
}