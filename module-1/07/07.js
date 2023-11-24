const count = parseInt(prompt("How many dices?"))
if (isNaN(count)) {
    document.querySelector("#dice").innerHTML = "Please enter a valid number."
} else {
    let dice
    let dices = ""
    let sum = 0

    for (let i = 0; i < count; i++) {
        dice = Math.floor(Math.random() * 6 + 1)
        sum += dice
        dices = `${dices} ${dice}`
    }

    document.querySelector("#dice").innerHTML = `Rolled ${count} dices: ${dices}`
    document.querySelector("#sum").innerHTML = `The sum is ${sum}`
}
