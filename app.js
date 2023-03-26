// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copy them.

const numbers = [3, 4, 12, 16, 88];
console.log("Largest:", Math.max(...numbers));

const person = ["John", "Sanders"];

const sayHello = (firstName, lastName) => {
  console.log("sayHello:", `Hello ${firstName} ${lastName}`);
};

// sayHello(person[0], person[1]);
sayHello(...person);
