"use strict";
const names = ["John", "Paul", "Jones"];

(() => {
  const targetElem = document.querySelector("#target");
  for (name of names) {
    targetElem.innerHTML += `<li>${name}</li>`;
  }
})();
