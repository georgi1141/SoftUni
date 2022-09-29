function equalArrays(arr1, arr2) {
    let arrToNum1 = [];
    let arrToNum2 = [];
    for (let i = 0; i < arr1.length; i++) {
        arrToNum1[i] = Number(arr1[i]);
    }
    for (let j = 0; j < arr1.length; j++) {
        arrToNum2[j] = Number(arr2[j]);
    }
    let areEqual = true;
    for (let j = 0; j < arr1.length; j++) {
        if (arrToNum1[j] !== arrToNum2[j]) {
            console.log(`Arrays are not identical. Found difference at ${j} index`);
            areEqual = false;
            break;
        }
    }
    let sum = 0;
    if (areEqual) {
        for (let index = 0; index < arrToNum1.length; index++) {
            sum += Number(arrToNum1[index]);
        }
    }
    if (sum !== 0) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
