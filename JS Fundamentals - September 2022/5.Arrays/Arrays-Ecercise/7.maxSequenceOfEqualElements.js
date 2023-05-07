function maxSequenceOfEqualElements(arr) {
    let counter = 0;
    let buff = '';
    let safe = '';
    let safeCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentI = arr[i];
        let j = i + 1;
        buff = `${currentI} `
        for (j; j < arr.length; j++) {
            let currentJ = arr[j];
            if (currentI === currentJ) {
                buff += `${currentI} `
                counter++;
            } else {
                if (counter > safeCounter) {
                    safe = buff;
                    safeCounter = counter;
                }
                counter = 0;
                break;
            }
        }
        if (j === arr.length) {
            if (counter > safeCounter) {
                safe = buff;
                safeCounter = counter;
            }
            return console.log(safe);
        }
    }
    console.log(safe);
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])