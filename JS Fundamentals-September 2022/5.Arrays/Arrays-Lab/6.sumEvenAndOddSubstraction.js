function substraction(arr) {

    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += Number(arr[i])
        }
        if (arr[i] % 2 !== 0) {
            odd += Number(arr[i])
        }
    }
    console.log(even - odd)
}

substraction(['1', '2', '3', '4', '5', '6']
)