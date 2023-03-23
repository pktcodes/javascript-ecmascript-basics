// Arrow Functions or Fat Arrow Functions
// no name - it means always function expression - assign to  a variable
// no function keyword
// parameters and return statement
// no parameters

/* Regular Function */
function sayHi() {
  console.log("SayHi: Hello Praveen");
}
sayHi();

/* Function Expression */
const greeting = function (name) {
  console.log(`Greeting: Hello ${name}`);
};
greeting("Praveen");

/* Function with two parameters */
function triple(num1, num2) {
  return `Triple: ${num1 * num2 * 3}`;
}
console.log(triple(2, 3));

/*
===============
Arrow Functions
===============
*/
console.log("======= ARROW FUNCTIONS =======");

// Can omit return & curly braces if code is one line
const sayHello = () => console.log("SayHello: Hello Praveen");
sayHello();

// can omit parenthesis for one parameter
const double = (value) => console.log("Double: ", value * 2);
double(4);

// Should have parenthesis for two paremeters and "return" f code is more than one line
const sum = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
const total = sum(10, 10);
console.log("Total: ", total);

// Return Object - use () to let JS know since function use {} by default
const object = () => ({ name: "john", age: 25 });
const person = object();
// console.log("Person:", object());
console.log("Person: ", person);

// Callback function with Array method
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});
console.log("Big: ", big);

// Callback function with Event listener
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("You Clicked Me"));
