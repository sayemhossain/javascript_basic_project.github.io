let kgBtn = document.getElementById("kgBtn");
let poundBtn = document.getElementById("poundBtn");

kgBtn.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  document.getElementById("output").value = input / 2.205 + " Kg";
});

poundBtn.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  document.getElementById("output").value = input * 2.205 + " Pound";
});
