function simpleCalculator(numOne, numTwo, operator) {
    operator === "multiply" ? console.log(numOne * numTwo) :
        operator === "divide" ? console.log(numOne / numTwo) :
            operator === "add" ? console.log(numOne + numTwo) :
                operator === "subtract" ? console.log(numOne - numTwo) : null
}
simpleCalculator(5, 5, 'multiply')