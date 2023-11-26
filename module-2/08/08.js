function concat(strings) {
  let concatString = "";
  strings.forEach((string) => {
    concatString += string;
  });
  return concatString;
}

(() => {
  const nameArray = ["Johnny", "DeeDee", "Joey", "Marky"];
  document.querySelector("#concat-text").textContent = concat(nameArray);
})();
