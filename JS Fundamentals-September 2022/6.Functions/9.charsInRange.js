function charactersInRange(first, second) {
    let f = first.charCodeAt();
    let s = second.charCodeAt();
    let i = 0;
    let j = 0;
    let buff = '';

    f < s ? (i = f, j = s) : (i = s, j = f);
    for (i += 1; i < j; i++) {
        let toString = String.fromCharCode(i)
        buff += `${toString} `
    }
    console.log(buff);
}
charactersInRange('C', '#')