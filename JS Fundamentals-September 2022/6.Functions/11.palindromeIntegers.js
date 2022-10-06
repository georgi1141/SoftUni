function checkReverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        let arrToString = arr[i].toString();
        let reversedString = arrToString.split("").reverse().join("");

        arrToString === reversedString ? console.log("true") : console.log("false");
    }
}

checkReverse([32, 2, 232, 1010]);
