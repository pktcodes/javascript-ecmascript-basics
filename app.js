// var, let , const
// define, update, redefine
// const cannot mutate primitive type

// Define
var number = 100;
console.log("var : ", number);
// Update
number = 200;
console.log("var : ", number);
// Redefine - this is not good, that's why let, const are preferred
var number = "orange";
console.log("var : ", number);

let amount = 100;
console.log("let :", amount);
amount = 200;
console.log("let :", amount);
// var amount = "string";
// console.log("let :", amount);

// primitive Type
const total = 100;
console.log("const :", total);
// total = 200;
// console.log("const :", total);

// Object type - can mutate the values
const person = { name: "bob" };
person.name = "john";
console.log(person);
