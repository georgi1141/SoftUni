function findSmallestInt(a, b, c) {
    let arr = [];
    arr.push(a, b, c);
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        arr[i] < smallest ? (smallest = arr[i]) : null;
    }
    return smallest;
}

console.log(findSmallestInt(2, 5, 3));

// simpler case with a Math.min method

// function findSmallestInt(a, b, c) {
//     let minNum = Math.min(a, b, c);
//     return minNum;
// }

