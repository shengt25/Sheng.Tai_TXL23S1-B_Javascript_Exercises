(() => {
  const targetElem = document.querySelector("#target");

  const liElem1 = document.createElement("li");
  liElem1.textContent = "First item";
  targetElem.appendChild(liElem1);

  const liElem2 = document.createElement("li");
  liElem2.textContent = "Second item";
  targetElem.appendChild(liElem2);

  const liElem3 = document.createElement("li");
  liElem3.textContent = "Third item";
  targetElem.appendChild(liElem3);
})();
