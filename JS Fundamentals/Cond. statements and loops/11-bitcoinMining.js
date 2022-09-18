function bitcoinMining(dig) {
    let day = 0;
    let money = 0
    let gold = 0;
    let bitcoin = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < dig.length; i++) {
        day = i + 1;
        day % 3 === 0 ? gold = dig[i] * 0.7 : gold = dig[i];
        let goldMOney = gold * 67.51;
        let dayBit = 0;
        money += goldMOney;
        // Buy bitcoin if have enough money
        if (money >= 11949.16) {
            dayBit = (Math.floor(money / 11949.16));
            // first day buying
            if (firstBitcoinDay === 0) {
                firstBitcoinDay = day;
            }
            //money after buying
            money -= dayBit * 11949.16;
            bitcoin += dayBit;
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    bitcoin === 0 ? null : console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}