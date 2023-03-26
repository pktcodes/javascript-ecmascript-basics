// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

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
// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);

/* ES6 */
const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;

console.log(firstName, last, city, zip, favoriteSibling);
