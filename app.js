// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// As Function Arguments

const bob = {
  first: "bob",
  last: "sanders",
  city: "san fransico",
  siblings: {
    sister: "jane",
    brother: "peter",
  },
};

/* Prior to ES6 */
// function printPerson(person) {
//   console.log(person.first);
// }

/* ES6 */
function printPerson({ first, last, city }) {
  // const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(bob);
