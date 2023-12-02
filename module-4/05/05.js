(async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await response.json();
    const joke = json.value;
    console.log(joke);
  } catch (error) {
    console.log(error.message);
  }
})();
