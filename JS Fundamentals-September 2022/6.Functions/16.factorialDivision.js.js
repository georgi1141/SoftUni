function factorialDivision(num1, num2) {
    let buff1 = num1;
    let buff2 = num2;

    for (let i = num1 - 1; i >= 1; i--) {
        buff1 *= i;
    }
    for (let j = num2 - 1; j >= 1; j--) {
        buff2 *= j;
    }
    console.log((buff1 / buff2).toFixed(2));
}
factorialDivision(6, 2)