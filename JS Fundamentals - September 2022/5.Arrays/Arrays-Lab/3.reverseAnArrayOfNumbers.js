function reverse(num, arr) {

    let array = []
    for (let i = 0; i < num; i++) {
        array.unshift(arr[i])
    }
    console.log(array.join(' '))
}

reverse(4, [-1, 20, 99, 5])