function printDNA(lengthDNA) {
    let start = "ATCGTTAGGG";
    let sequence = start.split("");
    let counter = 0;
    // depending on the last advise ensure the correct input 
    for (let j = 1; j <= Number(lengthDNA); j++) {
        let first = sequence[0];
        let second = sequence[1];
        let output = '';
        //counter change the print structure
        counter++;
        if (counter === 1) {
            output = `**${first}${second}**`          // **##**
        } else if (counter === 2 || counter === 4) {
            output = `*${first}--${second}*`          // *#--#*
        } else if (counter === 3) {
            output = `${first}----${second}`          // #----#
        }
        //resetting counter
        counter === 4 ? counter = 0 : null;
        //printing output
        console.log(output);
        //cut element from the start of array and put it to the end of the same array
        for (let k = 1; k <= 2; k++) {
            let firstShift = sequence.shift()
            sequence.push(firstShift)
        }
    }
}
printDNA(10)