function numMod(num) {
    let avarage = 0;
    let arrayNum = num.toString().split("");
    //while avarage is not reached
    while (avarage <= 5) {
        let sum = 0;
        //calc avarage of num
        for (let i = 0; i < arrayNum.length; i++) {
            sum += Number(arrayNum[i]);
        }
        avarage = sum / arrayNum.length;
        if (avarage < 5) {
            arrayNum.push(9);
        }
    }
    console.log(arrayNum.join(""));
}

numMod(5835);
