function concat(input) {

    let firstName = input[0]
    let lastName = input[1]
    let age = input[2]
    let city = input[3]
    let output = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`
    console.log(output)

}

concat(['Georgi', 'Yanev', '31', 'Varna'])