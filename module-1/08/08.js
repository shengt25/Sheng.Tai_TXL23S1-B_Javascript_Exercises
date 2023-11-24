const startYear = parseInt(prompt("Enter the start year:"))
const endYear = parseInt(prompt("Enter the end year:"))
if (isNaN(startYear) || isNaN(endYear)) {
    document.querySelector("#title").innerHTML = "Please enter valid years."
} else {
    document.querySelector("#title").innerHTML = `Leap years from ${startYear} to ${endYear}:`
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            document.querySelector("#list").innerHTML += `<li>${year}</li>`
        }
    }
}