const num = parseInt(prompt("Enter a number:"))
let result
if (isNaN(num)) {
    result = "Please enter a valid number."
} else {
    if (num <= 1) {
        result = "Please enter a number greater than 1"
    } else {
        result = `${num} is prime number.`
        for (let i = 2; i <= Math.floor(num / 2); i++) {
            if (num % i === 0) {
                result = `${num} is not prime number.`
                break
            }
        }
    }
}
document.querySelector("#result").innerHTML = result