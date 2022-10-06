function loadingBar(num) {
    let percentSignCounter = num.toString().charAt(0);
    let loader = "[";
    if (num < 99 && num >= 0) {
        for (let i = 0; i < 10; i++) {
            i < percentSignCounter
                ? (loader += String.fromCodePoint(37))
                : (loader += ".");
            if (i === 9) {
                loader += "]";
            }
        }
        console.log(`${num}% ${loader}`);
        console.log(`Still loading...`);
    } else {
        console.log(`${num}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}

loadingBar(50);
