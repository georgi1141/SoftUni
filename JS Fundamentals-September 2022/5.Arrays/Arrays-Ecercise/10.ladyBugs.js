function ladybug(mainArray) {
    let fieldLength = mainArray.shift();
    let moves = mainArray.shift().split(' ').join('');
    let [field, , startIndex, direction, targetIndex] = [[], 0, '', 0];
    let bug;

    makeField(); //   field creation
    fillField(); //   field occupation 

    for (let i = 0; i < mainArray.length; i++) {
        //taking each separate move and split it to strings
        let currentMove = mainArray[i].split(' ');
        startIndex = Number(currentMove[0]);
        direction = currentMove[1];
        if (direction === 'right') {
            targetIndex = startIndex + Number(currentMove[2]);
        } else {
            targetIndex = startIndex - Number(currentMove[2]);
        }
        seekingPlace()
    }
    console.log(field.join(' '));

    //make field
    function makeField() {
        for (let i = 0; i < fieldLength; i++) {
            field.splice(i, 1, 0)
        }
    }
    //fill field
    function fillField() {
        for (let j = 0; j < moves.length; j++) {
            bug = moves[j]
            field.splice(bug, 1, 1)
        }
    }
    // change targetIndex until is empty
    function seekingPlace() {

        if (field[startIndex] === 0 || startIndex < 0) { // IF given index is 0 or startIndex is out of field
            return;
        } else if (field[targetIndex] < 0 || field[targetIndex] >= field.length) { // If target index is outside the field
            return;
        } else if (field[targetIndex] === 0) {
            field.splice(startIndex, 1, 0); //free startIndex place
            field.splice(targetIndex, 1, 1); //land on endIndex place
        } else if (field[targetIndex] === 1) {
            while (field[targetIndex] !== 0) {
                if (direction === 'right') {
                    field[++targetIndex];
                } else if (direction === 'left') {
                    field[--targetIndex];
                } else if (direction !== 'right' || direction !== 'left') { // IF direction is different than RIGHT or LEFT
                    return;
                }
                if (targetIndex < 0 || targetIndex >= field.length) {
                    return outOfField()
                }
            }
            field.splice(startIndex, 1, 0); //free startIndex place
            field.splice(targetIndex, 1, 1); //land on endIndex place
        } else if (targetIndex < 0 || targetIndex >= field.length) {
            outOfField()
        }
    }
    // IF targetIndex is out of field
    function outOfField() {
        return field.splice(startIndex, 1, 0); //free startIndex place
    }
}
ladybug([3, '0 1', '-1 right 1', '0 right 1', '2 right 1', '1 right 5'])