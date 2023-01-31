function subtract() {
    const firstInput = document.getElementById("firstNumber").value;
    const secondInput = document.getElementById("secondNumber").value;

    const result = Number(firstInput) - Number(secondInput);

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}
