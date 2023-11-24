const count = parseInt(prompt("How many dices?"))
if (isNaN(count)) {
    document.querySelector("#dice").innerHTML = "Please enter a valid number."
} else {
    let num
    let sum = 0
    let dices = ""

    for (let i = 0; i < count; i++) {
        num = Math.floor(Math.random() * 6 + 1)
        sum += num
        dices = `${dices} ${num}`
    }

    document.querySelector("#dice").innerHTML = `Rolled ${count} dices: ${dices}`
    document.querySelector("#sum").innerHTML = `The sum is ${sum}`
}
