(function () {
  const DOG_COUNT = 6;

  // ask for names
  let names = [];
  for (let i = 0; i < DOG_COUNT; i++) {
    names[i] = prompt(`Enter the name (${i + 1} of ${DOG_COUNT})`);
  }

  // create ordered list
  names.sort().reverse();
  for (let i = 0; i < names.length; i++) {
    const item = document.createElement("li");
    item.textContent = names[i];
    document.querySelector("#dog-list").appendChild(item);
  }

  // display
  document.querySelector(
    "#dog-heading",
  ).textContent = `${DOG_COUNT} dogs in reverse alphabetical order:`;
})();
