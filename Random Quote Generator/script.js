let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  `The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela`,
  `The way to get started is to quit talking and begin doing. -Walt Disney`,
  `If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt`,
  `Life is what happens when you're busy making other plans. -John Lennon`,
  `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
  `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey`,
  `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`,
];
btn.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});
