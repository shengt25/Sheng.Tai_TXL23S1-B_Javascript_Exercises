const num1 = parseInt(prompt('Enter integer 1:'))
const num2 = parseInt(prompt('Enter integer 2:'))
const num3 = parseInt(prompt('Enter integer 3:'))

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.querySelector("#input").innerHTML = "Please only enter numbers."
} else {
    const sum = num1 + num2 + num3
    const product = num1 * num2 * num3
    const average = sum / 3
    document.querySelector("#input").innerHTML = `You entered ${num1}, ${num2}, ${num3}`
    document.querySelector("#sum").innerHTML = `Sum: ${sum}`
    document.querySelector("#product").innerHTML = `Product: ${product}`
    document.querySelector("#average").innerHTML = `Average: ${average}`
}