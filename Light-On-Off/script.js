var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var light = document.getElementById("light");
var heading = document.getElementById("heading");

btn1.addEventListener("click", function () {
  heading.innerHTML = "Light On";
  light.src = "img/bulbOn.png";
});
btn2.addEventListener("click", function () {
  heading.innerHTML = "Light Off";
  light.src = "img/bulbOff.png";
});
