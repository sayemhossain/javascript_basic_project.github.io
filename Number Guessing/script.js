let btn = document.getElementById("btn");
let output = document.getElementById("outputTxt");

btn.addEventListener("click", function () {
  let number = [Math.floor(Math.random() * 10)];
  let input = document.getElementById("userInput").value;

  if (input == number) {
    output.innerHTML = `You guessed right!`;
  } else if (input < number) {
    output.innerHTML = `Sorry! You guessed low. The number was ${number}`;
  } else if (input > number) {
    output.innerHTML = `Sorry! You guessed high. The number was ${number}`;
  }
});
