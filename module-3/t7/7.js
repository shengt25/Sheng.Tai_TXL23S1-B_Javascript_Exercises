(() => {
  const triggerElem = document.querySelector("#trigger");
  const targetEle = document.querySelector("#target");

  triggerElem.addEventListener("mouseover", () => {
    targetEle.src = "img/picB.jpg";
  });

  triggerElem.addEventListener("mouseleave", () => {
    targetEle.src = "img/picA.jpg";
  });
})();
