function findGradr(grade) {
    let level = ''

    if (grade < 3) {
        level = 'Fail'
    } else if (grade < 3.5) {
        level = 'Poor'
    } else if (grade < 4.5) {
        level = 'Good'
    } else if (grade < 5.5) {
        level = 'Very good'
    } else if (grade >= 5.5) {
        level = 'Excellent'
    }


    if (level == 'Fail') {
        return `${level} (${grade.toFixed(0)})`
    } else {
        return `${level} (${grade.toFixed(2)})`
    }
}
console.log(findGradr(4.50))