// Template Strings/Literals - easy to write

const firstName = "bob";
const lastName = "sanders";
const age = 25;

/* String Concatenation */
const phrase =
  "My full name is " +
  firstName +
  " " +
  lastName +
  " and I'm " +
  age +
  " years old.";

console.log(phrase);

/* Template String/Literal */
const person = `Hello, My full name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} and I am ${
  age * 2
} years old.`;

console.log(person);
