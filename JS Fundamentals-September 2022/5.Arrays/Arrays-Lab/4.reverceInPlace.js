function reverse(arr) {

    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.unshift(arr[i])
    }
    console.log(array.join(' '))
}

reverse(['a', 'b', 'c', 'd', 'e'])