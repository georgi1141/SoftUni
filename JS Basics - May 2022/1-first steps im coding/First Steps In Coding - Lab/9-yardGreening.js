function yardGreening(input) {

    let area = Number(input[0])
    let fullPrice = area * 7.61
    let discountPrice = fullPrice * 0.18
    let finalPrice = fullPrice - discountPrice

    let output1 = `The final price is: ${finalPrice} lv.`
    let output2 = `The discount is: ${discountPrice} lv.`

    console.log(output1)
    console.log(output2)
}

yardGreening(['550'])