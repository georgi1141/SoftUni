function intAndFloat(a, b, c) {
    let sum = a + b + c;
    sum % 1 === 0 ? (sum = `${sum} - Integer`) : (sum = `${sum} - Float`);
    console.log(sum);
}
intAndFloat(100, 200, 303);

// You will receive 3 numbers.Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`
