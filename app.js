// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of - creates a new Array instance from a variable number of arguments.

console.log(" === Example ===");
const example = ["one", "two", "three", "four", "five"];
console.log(example);
console.log(example.map);
console.log(example.from);
console.log(example.of);

// These methods are on "Array" Object which is from Window Object
console.log(" === Array Object ===");
console.log(Array);
console.dir(Array);

/* Array.of() */
console.log("=== Array.of() ===");

// const person = ["john", 25, true];

const person = Array.of("john", 25, true);
console.log(person);
