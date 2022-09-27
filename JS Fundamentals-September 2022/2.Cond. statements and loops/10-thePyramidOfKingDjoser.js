function pyramid(base, increment) {

    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0
    let counter = 1

    for (let i = base; i > 0; i -= 2) {
        let fBase = base;
        let lengthBase = fBase * 4 - 4;
        if (i === 2 || i === 1) {
            gold = fBase * fBase * increment;
            break;
        }
        if (counter % 5 === 0) {
            lapisLazuli += lengthBase * increment;
        } else {
            marble += lengthBase * increment;
        }
        stone += (fBase - 2) * (fBase - 2) * increment;
        base -= 2;
        counter++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(counter * increment)}`);
}