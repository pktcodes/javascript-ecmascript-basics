// Destructuring - Swap Variables
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

let first = "john";
let second = "bob";

// const temp = first;
// first = second;
// second = temp;

[second, first] = [first, second];

console.log(first, second);
