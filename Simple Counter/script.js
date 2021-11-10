let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let number = document.getElementById("number");

let int = 0;
increment.addEventListener("click", function () {
  int++;
  number.innerHTML = int;
});
decrement.addEventListener("click", function () {
  int--;
  number.innerHTML = int;
});
