(() => {
  const htmlCode =
    "<li>First item</li> <li>Second item</li> <li>Third item</li>";
  const targetElem = document.querySelector("#target");
  targetElem.innerHTML = htmlCode;
  targetElem.classList.add("my-list");
})();
