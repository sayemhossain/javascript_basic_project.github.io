let input = document.getElementById("input");
let output = document.getElementById("output");
let meterbtn = document.getElementById("meterbtn");
let feetbtn = document.getElementById("feetbtn");

meterbtn.addEventListener("click", function () {
  output.value = input.value / 3.281 + " Meter";
});
feetbtn.addEventListener("click", function () {
  output.value = input.value * 3.281 + " Feet";
});
