// try to use IIFE and appendChild

(function () {
  let numbers = [];
  let inputs = "";

  for (let i = 0; i < 5; i++) {
    const numberInput = parseFloat(prompt(`Enter a number ${i + 1} of 5:`));
    if (Number.isNaN(numberInput)) {
      alert("Please enter number only.");
      i--;
    } else {
      numbers[i] = numberInput;
      inputs = `${inputs} ${numbers[i]}`;
    }
  }

  let result = "";
  for (let i = 4; i >= 0; i--) {
    result = `${result} ${numbers[i]}`;
  }
  document.querySelector("#input-text").textContent = `You entered: ${inputs}`;
  document.querySelector(
    "#result-text",
  ).textContent = `Reverse order: ${result}`;
})();
