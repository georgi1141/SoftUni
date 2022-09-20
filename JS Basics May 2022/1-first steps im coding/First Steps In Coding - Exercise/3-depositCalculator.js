function depositCalc(input) {

    let depositSum = Number(input[0])
    let deadlineMonths = Number(input[1])
    let yearlyPctg = Number(input[2]) / 100

    let interestSum = depositSum * yearlyPctg
    let monthlyInterest = interestSum / 12
    let total = depositSum + (deadlineMonths * monthlyInterest)
    console.log(total)

}

depositCalc(['200', '3', '5.7'])