const count = parseInt(prompt("How many dices?"))
if (isNaN(count)) {
    document.write(`<p>Please enter a valid number.</p>`)

} else {
    let num
    let sum = 0
    document.write(`<p>Rolled ${count} dices: `)
    for (let i = 0; i < count; i++) {
        num = Math.floor(Math.random() * 6 + 1)
        sum += num
        document.write(`${num} `)
    }
    document.write(`</p>`)
    document.write(`<p>The sum is ${sum}</p>`)
}
