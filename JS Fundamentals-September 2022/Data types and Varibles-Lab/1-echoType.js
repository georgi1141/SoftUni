function typeOff(params) {

    typeof (params) === 'string' || typeof (params) === 'number' ? console.log(`${typeof (params)}\n${params}`) : console.log(`${typeof (params)}\nParameter is not suitable for printing
`);
}

typeOff(null)




// Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:

// • If the parameter type is either string or number, print its value
// • Otherwise, print the text 'Parameter is not suitable for printing'