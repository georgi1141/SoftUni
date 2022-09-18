function englishNameOfLastDigit(number) {

    number = number.toString()
    let lastChar = number.charAt(number.length - 1)
    let lastCharWord = ''

    switch (lastChar) {
        case '1': lastCharWord = 'one'
            break;
        case '2': lastCharWord = 'two'
            break;
        case '3': lastCharWord = 'three'
            break;
        case '4': lastCharWord = 'four'
            break;
        case '5': lastCharWord = 'five'
            break;
        case '6': lastCharWord = 'six'
            break;
        case '7': lastCharWord = 'seven'
            break;
        case '8': lastCharWord = 'eight'
            break;
        case '9': lastCharWord = 'nine'
            break;
        case '0': lastCharWord = 'zero'
            break;

    }

    console.log(lastCharWord);

}