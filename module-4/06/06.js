function display(json) {
  const resultEle = document.querySelector("#result");
  // remove all children
  while (resultEle.firstChild) {
    resultEle.removeChild(resultEle.firstChild);
  }
  // display all result in loop
  json.forEach((joke) => {
    const articleEle = document.createElement("article");
    const pEle = document.createElement("p");
    pEle.textContent = joke.value;
    articleEle.appendChild(pEle);
    resultEle.appendChild(articleEle);
  });
}

(() => {
  const formEle = document.querySelector("#query-form");
  formEle.addEventListener("submit", async (e) => {
    e.preventDefault();
    const valueInput = document.querySelector("#query").value;
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${valueInput}`,
      );
      const json = await response.json();
      display(json.result);
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  });
})();
