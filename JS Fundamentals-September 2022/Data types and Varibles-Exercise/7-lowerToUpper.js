function lowerToUpper(params) {
    let letter = params.charCodeAt();
    if (letter >= 65 && letter <= 90) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}

lowerToUpper('L')









// Write a function that prints whether a given character is upper -case or lower -case.