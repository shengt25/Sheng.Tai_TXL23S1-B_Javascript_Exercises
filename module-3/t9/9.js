(() => {
  function calculate() {
    const expression = document.querySelector("#calculation").value;
    let result;
    if (expression.includes("+")) {
      const numbers = expression.split("+");
      result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } else if (expression.includes("-")) {
      const numbers = expression.split("-");
      result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } else if (expression.includes("*")) {
      const numbers = expression.split("*");
      result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } else if (expression.includes("/")) {
      const numbers = expression.split("/");
      if (numbers[1] === "0") result = "Error";
      else result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    } else result = "Invalid expression";

    const resultElem = document.querySelector("#result");
    resultElem.textContent = result.toString();
  }

  document.querySelector("#start").addEventListener("click", calculate);
})();
