function even(numArray) {
  let evenNumArray = [];
  numArray.forEach((num) => {
    if (num % 2 === 0) evenNumArray.push(num);
  });
  return evenNumArray;
}

(() => {
  let numArray = [2, 7, 4, 9, 10, 2, 3, 6];
  console.log(numArray);
  console.log(even(numArray));
})();
