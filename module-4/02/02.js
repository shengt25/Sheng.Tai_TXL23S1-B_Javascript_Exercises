(() => {
  const queryForm = document.querySelector("#query-form");
  queryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector("#query").value;
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${nameInput}`,
      );
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  });
})();
