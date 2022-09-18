function devisible(num) {
    let devisible = 0

    if (num % 2 === 0) {
        devisible = 2
    }
    if (num % 3 === 0) {
        devisible = 3
    }
    if (num % 6 === 0) {
        devisible = 6
    }
    if (num % 7 === 0) {
        devisible = 7
    }
    if (num % 10 === 0) {
        devisible = 10
    }


    if (devisible === 2 || devisible === 3 || devisible === 6 || devisible === 7 || devisible === 10) {
        console.log(`The number is divisible by ${devisible}`)
    } else {
        console.log(`Not divisible`)
    }

}