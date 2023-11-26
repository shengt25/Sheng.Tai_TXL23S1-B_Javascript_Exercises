(function () {
  let numbers = [];
  let numInput;
  while (true) {
    numInput = parseInt(prompt("Enter a non-zero number, enter 0 to stop:"));
    if (Number.isNaN(numInput)) {
      alert("Please enter a valid number.");
    } else {
      if (numInput !== 0) {
        numbers.push(numInput);
      } else {
        break;
      }
    }
  }
  numbers.sort((a, b) => a - b).reverse();
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
})();
