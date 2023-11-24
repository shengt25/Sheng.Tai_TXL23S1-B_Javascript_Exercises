const num1 = parseInt(prompt('Enter integer 1:'))
const num2 = parseInt(prompt('Enter integer 2:'))
const num3 = parseInt(prompt('Enter integer 3:'))

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.write("<p>Please enter valid numbers.</p>")
} else {

    const sum = num1 + num2 + num3
    const product = num1 * num2 * num3
    const average = sum / 3

    document.write(`<p>Three integers: ${num1}, ${num2}, ${num3}</p>`)
    document.write(`<p>sum: ${sum}</p>`)
    document.write(`<p>product: ${product}</p>`)
    document.write(`<p>average: ${average}</p>`)
}