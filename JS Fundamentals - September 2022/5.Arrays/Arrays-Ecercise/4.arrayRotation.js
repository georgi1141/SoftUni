function rotation(array, numRotations) {
    let newArray = array;
    let buffer = "";

    for (let i = 0; i < numRotations; i++) {
        buffer = newArray[0];
        newArray.shift();
        newArray.push(buffer);
    }
    console.log(newArray.join(" "));
}

rotation([2, 4, 15, 31], 5);
