function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr1[i] === arr2[j] ? console.log(arr1[i]) : null;
        }
    }
}

commonElements(
    ["S", "o", "f", "t", "U", "n", "i", " "],

    ["s", "o", "c", "i", "a", "l"]
);
