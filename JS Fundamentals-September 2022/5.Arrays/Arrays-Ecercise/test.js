function maxNumber(arr) {
    let result = [];
    while (arr.length !== 0) {
        let current = arr.shift(); // take the first number from array
        let arrMax = Math.max(...arr); // find biggest number in array left
        current > arrMax ? result.push(current) : null; // compared one to each other
    }
    console.log(result.join(' '));
}
maxNumber([13, 45, 48])