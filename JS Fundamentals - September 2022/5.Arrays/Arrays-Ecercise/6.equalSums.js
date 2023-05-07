function equalSums(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let noIndex = false;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        //calc right side of the current index of the array
        for (let m = i + 1; m < arr.length; m++) {
            sumRight += Number(arr[m]);
        } //calc left side of the current index of the array
        for (let a = i - 1; a >= 0; a--) {
            sumLeft += Number(arr[a]);
        }
        // check if left and right are equal nad set counter for the 'no' case
        if (sumLeft === sumRight) {
            console.log(i);
            counter++;
        }
        // no case 
        if (arr.length - 1 === i && counter < 1) {
            noIndex = true;
        }

        sumLeft = 0;
        sumRight = 0;
    }
    if (noIndex) {
        console.log("no");
    }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
