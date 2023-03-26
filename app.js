// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

const text = [...headings]
  .map((item) => {
    return `<span>${item.textContent}</span>`;
  })
  .join(" - ");
result.innerHTML = text;
console.log(text);
