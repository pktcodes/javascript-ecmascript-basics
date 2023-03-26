// new string methods
// startsWith(), endsWith(), includes(),repeat()

const person = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JOHN-DOE";

/* startsWith() */
console.log("=== startsWith() ===");
console.log(person.startsWith("Pet"));
// case-sensitive - since it is a string
console.log(person.startsWith("PETER"));
console.log(employee.startsWith("EMP", 6));

/* endsWith() */
console.log("=== endsWith() ===");
console.log(manager.endsWith("DOE"));
console.log(manager.endsWith("MAN", 9));

/* includes() */
console.log("=== includes() ===");
console.log(employee.includes("PETER"));
console.log(employee.includes("pETER"));

/* repeat() */
console.log("=== repeat() ===");
console.log(person.repeat(2));

// with Arrow Function
const multiplyPeople = (person, amount = 5) => {
  return person.repeat(amount);
};

const people = multiplyPeople(person, 10);
console.log(people);
