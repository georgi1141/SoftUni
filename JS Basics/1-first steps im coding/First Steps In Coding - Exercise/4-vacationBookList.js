function pages(input) {
    let pagesSum = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])

    let totalTime = pagesSum / pagesPerHour
    let totalHour = totalTime / days 
    console.log(totalHour)

} 

pages(['212', '20', '2'])