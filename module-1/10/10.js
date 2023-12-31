const count = parseInt(prompt("How many dices?"))
const noi = parseInt(prompt("Enter number of interest:"))
if (isNaN(count) || isNaN(noi)) {
    document.querySelector("#title").innerHTML = "Please enter valid numbers."

} else {
    const simulateCount = 10000
    let hit = 0
    let num
    for (let i = 0; i < simulateCount; i++) {
        let sum = 0
        for (let j = 0; j < count; j++) {
            num = Math.floor(Math.random() * 6 + 1)
            sum += num
        }
        if (sum === noi) {
            hit += 1
        }
    }
    probability = (hit / simulateCount * 100).toFixed(2)
    document.querySelector("#title").innerHTML = `Simulated times: ${simulateCount}`
    document.querySelector("#result").innerHTML = `Probability to get sum ${noi} with ${count} dice is ${probability}%`
}