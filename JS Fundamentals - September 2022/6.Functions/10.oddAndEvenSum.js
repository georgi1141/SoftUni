function sum(num) {
    let sum = num.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < sum.length; i++) {
        sum.charAt(i) % 2 == 0
            ? (sumEven += Number(sum.charAt(i)))
            : (sumOdd += Number(sum.charAt(i)));
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
sum(3495892137259234);
