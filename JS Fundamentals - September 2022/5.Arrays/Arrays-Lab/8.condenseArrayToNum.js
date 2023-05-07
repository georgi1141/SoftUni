function condense(params) {
    let condensed = [];
    let nums = [];

    if (params.length <= 1) {
        console.log(`${params.toString()}`);
    } else {
        for (let index = 0; index < params.length - 1; index++) {
            condensed[index] = params[index] + params[index + 1];
        }
        nums = condensed;
        while (nums.length > 1) {
            for (let i = 0; i < nums.length - 1; i++) {
                nums[i] = nums[i] + nums[i + 1];
            }
            nums.pop();
        }
        console.log(nums.join());
    }
}

condense([5, 0, 4, 1, 2]);
