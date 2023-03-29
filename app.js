// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

/* String */
const person = "peter";
console.log(Array.from(person));

/* Arguments */
function countTotal() {
  console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, current) => (total += current)
  );
  console.log("Total:", total);
}
countTotal(20, 30, 40, 100);
