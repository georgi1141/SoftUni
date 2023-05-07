
//--------------Fail------------// :((


function processCrystal(desired, crystal) {
    console.log(`Processing chunk ${crystal} microns`)
    // Cut
    if (crystal / 4 >= desired) {
        let cut = 0;
        while (crystal >= desired * 4) {
            crystal /= 4;
            cut++;
        }
        console.log(`Cut x${cut}`);
        console.log(`Transporting and washing`);
        if (!Number.isInteger(crystal)) {
            crystal = Math.trunc(crystal)
        }
    }
    // End Cut
    // Lap
    if (crystal * 0.8 >= desired) {
        let lap = 0;
        while (crystal >= desired * 1.2) {
            crystal *= 0.8;
            lap++;
        }
        console.log(`Lap x${lap}`);
        console.log(`Transporting and washing`);
        if (!Number.isInteger(crystal)) {
            crystal = Math.trunc(crystal)
        }
    }
    //End Lap
    // Grind
    if (crystal - 20 >= desired) {
        let grind = 0;
        while (crystal >= desired + 20) {
            crystal -= 20;
            grind++;
        }
        console.log(`Grind x${grind}`);
        console.log(`Transporting and washing`);
        if (!Number.isInteger(crystal)) {
            crystal = Math.trunc(crystal)
        }
    }
    //End Grind
    // Etch
    if (crystal - 2 >= desired) {
        let etch = 0;
        while (crystal > desired) {
            crystal -= 2;
            etch++;
        }
        console.log(`Etch x${etch}`);
        console.log(`Transporting and washing`);
        if (!Number.isInteger(crystal)) {
            crystal = Math.trunc(crystal)
        }
    }
    //End Etch
    //X-ray
    if (crystal < desired) {
        crystal += 1;
        console.log(`X-ray x1`);
        if (!Number.isInteger(crystal)) {
            crystal = Math.trunc(crystal)
        }
    }
    //End X-ray
    // Finish
    if (crystal === desired) {
        console.log(`Finished crystal ${desired} microns`);
    }
    const radioCrystals = function () {
        let desired = arr.shift();
        for (let i = 0; i < arr.length; i++) {
            crystal = arr[i];
            console.log(`Processing chunk ${crystal} microns`);
        }
    }


}


// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
processCrystal(1375, 50000);