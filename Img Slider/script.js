let prevBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");

var arr = [
  "/Img Slider/img/arts.jpg",
  "/Img Slider/img/commerce.jpg",
  "/Img Slider/img/polytecnic.jpg",
  "/Img Slider/img/science1.jpg",
  "/Img Slider/img/science2.jpg",
];

var i = 0;

nextBtn.addEventListener("click", function () {
  i++;
  if (i > arr.length - 1) {
    i = 0;
  }
  document.getElementById("image").src = arr[i];
});
prevBtn.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  document.getElementById("image").src = arr[i];
});
