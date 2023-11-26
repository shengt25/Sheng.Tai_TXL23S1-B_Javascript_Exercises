function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

(() => {
  let diceNumber = 0;
  do {
    diceNumber = rollDice();
    const diceItem = document.createElement("li");
    diceItem.textContent = diceNumber.toString();
    document.querySelector("#dice-list").appendChild(diceItem);
  } while (diceNumber !== 6);
})();
