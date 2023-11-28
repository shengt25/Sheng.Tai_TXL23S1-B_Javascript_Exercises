"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

(() => {
  const targetElem = document.querySelector("#target");
  for (const student of students) {
    const optionElem = document.createElement("option");
    optionElem.value = student.id;
    optionElem.textContent = student.name;
    targetElem.appendChild(optionElem);
  }
})();
