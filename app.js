// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const paragraphs = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

let text = Array.from(paragraphs);
text = text
  .map((item) => {
    return `<span>${item.textContent}</span>`;
  })
  .join(" ");
result.innerHTML = text;

const newText = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");
second.innerHTML = newText;
