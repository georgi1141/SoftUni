function login(username) {
    let correctUsername = username[0].split("").reverse().join("");
    let counter = 0;

    for (let i = 1; i <= username.length; i++) {
        counter++;

        if (username[i] === correctUsername) {
            console.log(`User ${username[0]} logged in.`);
            break;
        } else if (username[i] !== correctUsername && counter <= 3) {
            console.log(`Incorrect password. Try again.`);
        }

        if (counter >= 4) {
            console.log(`User ${username[0]} blocked!`);
            break;
        }
    }
}