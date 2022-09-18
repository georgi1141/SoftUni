function rounding(rounded, precision) {

    let decimolPoint = precision
    if (decimolPoint > 15) {
        decimolPoint = 15
    }

    let finalNum = rounded.toFixed(decimolPoint)
    console.log(parseFloat(finalNum))

}