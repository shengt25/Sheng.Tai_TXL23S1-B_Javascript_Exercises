const startYear = parseInt(prompt("Enter the start year:"))
const endYear = parseInt(prompt("Enter the end year:"))
if (isNaN(startYear) || isNaN(endYear)) {
    document.write(`<p>Please enter valid years.</p>`)
} else {
    document.write(`<p>Leap years from ${startYear} to ${endYear} are:</p>`)
    document.write("<ul>")
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            document.write(`<li>${year}</li>`)
        }
    }
    document.write("</ul>")
}