function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let currentI = arr[i];
        let j = i + 1;
        for (j; j < arr.length; j++) {
            let currentJ = arr[j];
            if (currentI + currentJ === num) {
                console.log(`${currentI} ${currentJ}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)