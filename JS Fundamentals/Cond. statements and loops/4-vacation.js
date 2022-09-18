function vacation(numGroup, typeGroup, weekDay) {
    let price = 0;
    switch (weekDay) {
        case `Friday`:
            switch (typeGroup) {
                case `Students`:
                    price = 8.45;

                    break;
                case `Business`:
                    price = 10.9;

                    break;
                case `Regular`:
                    price = 15;

                    break;
            }

            break;
        case `Saturday`:
            switch (typeGroup) {
                case `Students`:
                    price = 9.8;

                    break;
                case `Business`:
                    price = 15.6;

                    break;
                case `Regular`:
                    price = 20;

                    break;
            }

            break;
        case `Sunday`:
            switch (typeGroup) {
                case `Students`:
                    price = 10.46;

                    break;
                case `Business`:
                    price = 16;

                    break;
                case `Regular`:
                    price = 22.5;

                    break;
            }

            break;
    }
    let sum = numGroup * price

    if (typeGroup === `Students` && numGroup >= 30) {
        sum *= 0.85;
    }
    if (typeGroup === `Business` && numGroup >= 100) {
        sum = (numGroup - 10) * price
    }
    if (typeGroup === `Regular` && (numGroup >= 10 && numGroup <= 20)) {
        sum *= 0.95
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}