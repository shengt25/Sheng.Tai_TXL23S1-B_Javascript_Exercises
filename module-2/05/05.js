(function () {
  let numbers = [];
  let numInput;
  while (true) {
    numInput = parseInt(prompt("Enter a number:"));
    if (Number.isNaN(numInput)) alert("Please enter a valid number.");
    else {
      if (numbers.includes(numInput)) break;
      else numbers.push(numInput);
    }
  }
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
})();
