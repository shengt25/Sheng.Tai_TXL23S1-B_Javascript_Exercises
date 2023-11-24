const year = parseInt(prompt("Enter the year:"))
let result
if (isNaN(year)) {
    result = `Please enter a valid year.`
} else {
    result = `${year} is not leap year.`
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = `${year} is leap year.`
    }
}

document.querySelector("#result").innerHTML = result