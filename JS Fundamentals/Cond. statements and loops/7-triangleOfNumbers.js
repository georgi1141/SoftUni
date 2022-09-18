function triangle(num) {
    let buffer = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            buffer += ` ${i}`;
        }
        console.log(buffer.trim());

        buffer = ``;
    }
}