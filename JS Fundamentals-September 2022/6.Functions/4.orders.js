function calcPrice(product, quantity) {
    let totalPrice = 0;

    const coffeePrice = 1.5;
    const cokePrice = 1.4;
    const waterPrice = 1;
    const snacksPrice = 2;
    switch (product) {
        case "coffee":
            totalPrice = quantity * coffeePrice;
            break;
        case "coke":
            totalPrice = quantity * cokePrice;
            break;
        case "water":
            totalPrice = quantity * waterPrice;
            break;
        case "snack":
            totalPrice = quantity * snacksPrice;
            break;
    }
    return totalPrice.toFixed(2);
}

console.log(calcPrice("coffee", 2));
