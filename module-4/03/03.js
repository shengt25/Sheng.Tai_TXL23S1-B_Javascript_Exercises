function display(json) {
  const resultEle = document.querySelector("#result");
  resultEle.innerHTML = "";
  for (const data of json) {
    const name = data["show"]["name"];
    const url = data["show"]["officialSite"];
    const imageMedium = data["show"]["image"]?.["medium"];
    const summary = data["show"]["summary"];
    console.log(name, url, imageMedium, summary);

    const nameEle = document.createElement("h2");
    const urlEle = document.createElement("a");
    const imgEle = document.createElement("img");
    const summaryEle = document.createElement("p");
    const articleEle = document.createElement("article");

    urlEle.target = url;
    nameEle.textContent = name;
    imgEle.src = imageMedium;
    imgEle.alt = name;
    summaryEle.innerHTML = summary;

    articleEle.appendChild(urlEle);
    articleEle.appendChild(nameEle);
    articleEle.appendChild(imgEle);
    articleEle.appendChild(summaryEle);

    resultEle.appendChild(articleEle);
  }
}

(() => {
  const queryForm = document.querySelector("#query-form");
  queryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector("#query").value;
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${nameInput}`,
      );
      const json = await response.json();
      console.log(json);
      display(json);
    } catch (error) {
      return error.message;
    }
  });
})();
