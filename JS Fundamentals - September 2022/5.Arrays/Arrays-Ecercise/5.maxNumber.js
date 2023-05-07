function maxNum(nums) {
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            continue;
        }
        let buffer = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                buffer = nums[i];
            } else {
                buffer = 0;
            }
        }
        if (buffer !== 0) {
            newArray.push(buffer);
        }
        if (nums.length - 1 === i) {
            newArray.push(nums[i]);
        }
    }

    console.log(newArray.join(" "));
}

maxNum([41, 41, 34, 20]);

/*
                            Easy solution from class-mate
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
*/