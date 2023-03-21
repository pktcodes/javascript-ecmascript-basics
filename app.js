// var, let , const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

console.log(amount);

// global scope
var amount = 100;

// function scoped - global can't access local
function calculate() {
  // local scope
  var random = "dollars";
  console.log(`Hello, the amount is ${amount} ${random}`);
}
calculate();
// can't access local
// console.log(random);

// if not function scoped i.e block scoped, global can access local value if it has same variable names which will cause problems
var total = 100;
var value = true;

// after lines of code, since user writing functionality which should use global total, instead of number he will get string(name collisions)
if (value) {
  var total = "oranges";
  console.log(`Hello, the total is ${total}`);
}
console.log(`what is the total: ${total}`);

// global scope
let number = 1000;
{
  // local scope
  let number = 500;
}
{
  let number = 1200;
}

console.log(number);
