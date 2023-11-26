function rollDice(side) {
  return Math.floor(Math.random() * side + 1);
}

(() => {
  let sideInput;
  while (true) {
    sideInput = parseInt(prompt("Enter the number of sizes of the dice"));
    if (Number.isNaN(sideInput)) alert("Please enter a valid number.");
    else break;
  }
  let diceNumber = 0;
  document.querySelector(
    "#dice-heading",
  ).textContent = `Rolling a ${sideInput} side-dice until ${sideInput}:`;
  do {
    diceNumber = rollDice(sideInput);
    const diceItem = document.createElement("li");
    diceItem.textContent = diceNumber.toString();
    document.querySelector("#dice-list").appendChild(diceItem);
  } while (diceNumber !== sideInput);
})();
