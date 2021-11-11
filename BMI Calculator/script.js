let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let weight = document.getElementById("weight-input").value;
  let height = document.getElementById("height-input").value;
  let kg = height / 100;
  document.getElementById("bmi-output").value = weight / (kg * kg);
});
