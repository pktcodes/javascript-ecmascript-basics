const author = "Some Author";
const statement = "Some Statement";

/* Prior to ES6 */
// const quote = `Here is the <strong class="blue">${statement}</strong>  by <strong class="blue">${author}</strong> and it could not be more true`;

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

const result = document.querySelector("#result");
result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map(function (item, index) {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
