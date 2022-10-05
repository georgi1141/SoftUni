function repeat(word, counter) {
    let strr = "";
    for (let i = 0; i < counter; i++) {
        strr += word;
    }

    return strr;
}

console.log(repeat("abc", 3));
