const isCal = confirm("Should I calculate the square root?")
let result
if (isCal === false) {
    result = "The square root is not calculated."
} else {
    const num = parseFloat(prompt("Enter a number:"))
    if (isNaN(num)) {
        result = "Please enter a valid number."
    } else {
        if (num < 0) {
            result = "The square root of a negative number is not defined."
        } else {
            result = `The square root of ${num} is: ${Math.sqrt(num)}`
        }
    }

}
document.querySelector("#result").innerHTML = result