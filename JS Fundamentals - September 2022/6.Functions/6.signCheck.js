function signCheck(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];
    let sign = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i] < 0 ? sign++ : null;
    }
    sign === 1 || sign === 3 ? console.log("Negative") : console.log("Positive");
}
signCheck(-5, 1, 1)