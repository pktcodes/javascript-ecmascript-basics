// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ["orange", "apple", "lemon"];
const friends = ["john", "anna", "bob", "peter", "kelly"];

/* Prior to ES6 */
const orange = fruits[0];
const apple = fruits[1];
const lemon = fruits[2];

console.log(orange, apple, lemon);

/* ES6 */
// const [friend, anna, bob, peter, kelly] = friends;
// console.log(friend, anna, bob);

// select some or skip others
const [friend, , bob, , kelly] = friends;
console.log(friend, bob, kelly);
