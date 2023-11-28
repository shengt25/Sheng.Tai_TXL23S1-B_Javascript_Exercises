function calculate() {
  let result;
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  const operation = document.querySelector("#operation").value;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "div":
      if (num2 !== 0) result = num1 / num2;
      else result = "Error";
      break;
  }
  document.querySelector("#result").textContent = result;
}

(() => {
  document.querySelector("#start").addEventListener("click", calculate);
})();
