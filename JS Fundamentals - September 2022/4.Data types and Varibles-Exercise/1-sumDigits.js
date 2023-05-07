function sum(num) {
    let buffer = 0
    let numString = num.toString()
    for (let i = 0; i < numString.length; i++) {
        buffer += Number(numString[i])
    }
    console.log(buffer)
}

sum(2341)


// 1. Sum Digits
// Write a function, which will be given a single number.Your task is to find the sum of its digits.