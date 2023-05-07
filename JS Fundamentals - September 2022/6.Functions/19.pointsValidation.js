function pointsValidation(numArr) {
    let x1 = numArr[0];
    let y1 = numArr[1];
    let x2 = numArr[2];
    let y2 = numArr[3];
    //√(x²) + (y²)
    let d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    //√(x2 - x1)² + (y2 - y1)²
    let d3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Number.isInteger() - true; false
    Number.isInteger(d1) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    Number.isInteger(d2) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    Number.isInteger(d3) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

}
pointsValidation([2, 1, 1, 1])