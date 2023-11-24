const name = prompt("Enter your name:")
const result_id = Math.floor(Math.random() * 4 + 1)
let result_str

switch (result_id) {
    case 1:
        result_str = "Gryffindor"
        break;
    case 2:
        result_str = "Slytherin"
        break;
    case 3:
        result_str = "Hufflepuff"
        break;
    case 4:
        result_str = "Ravenclaw"
        break;
}
document.querySelector("#result").innerHTML = `${name}, you are ${result_str}.`