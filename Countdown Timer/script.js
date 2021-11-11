let start = document.getElementById("startBtn");
let restart = document.getElementById("restartBtn");

var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("secounds");

//store the refeerence to the veriable
var startTimer = null;
function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}
function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener("click", function () {
  //initialize the variable starttimer
  function startInterval() {
    startTimer = setInterval(() => {
      timer();
    }, 1000);
  }
  startInterval();
});
restart.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopTimer();
});
