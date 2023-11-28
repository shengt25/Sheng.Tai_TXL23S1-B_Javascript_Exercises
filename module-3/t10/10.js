function printName(e) {
  e.preventDefault();
  const firstName = document.querySelector("#source [name='firstname']").value;
  const lastName = document.querySelector("#source [name='lastname']").value;
  document.querySelector("#target").textContent = `Your name is ${firstName} ${lastName}`;
}

(()=>{
  document.querySelector("#source").addEventListener("submit", printName);
})();