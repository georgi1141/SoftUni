function addAndSubstract(nums) {
    let newArray = [];
    let sum = 0;
    let substract = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (nums[i] % 2 == 0) {
            newArray[i] = nums[i] + i;
        }
        if (nums[i] % 2 != 0) {
            newArray[i] = nums[i] - i;
        }
    }
    for (let j = 0; j < nums.length; j++) {
        substract += newArray[j];
    }
    console.log(newArray);
    console.log(sum);
    console.log(substract);
}

addAndSubstract([5, 15, 23, 56, 35]);
