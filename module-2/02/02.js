(function () {
  // ask for number of participants
  let numberInput;
  while (true) {
    numberInput = parseInt(prompt("How many participants?"));
    if (Number.isNaN(numberInput) || numberInput <= 0) {
      alert("Please enter a valid number.");
    } else {
      break;
    }
  }
  // ask for names
  let names = [];
  for (let i = 0; i < numberInput; i++) {
    names[i] = prompt(`Enter the name (${i + 1} of ${numberInput})`);
  }

  // create ordered list
  document.querySelector("#participant-list").setAttribute("type", "1");
  names.sort();
  for (let i = 0; i < names.length; i++) {
    const item = document.createElement("li");
    item.textContent = names[i];
    document.querySelector("#participant-list").appendChild(item);
  }

  // display
  document.querySelector(
    "#participant-heading",
  ).textContent = `You have ${numberInput} participants (alphabetical order):`;
})();
