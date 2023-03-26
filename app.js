// Rest Operator ...
// gathers/collects the items
// Use cases - destructuring, function parameters
// common convention - rest
// spread is different - function arguments

/* === Arrays Destructuring === */
console.log("=== Arrays Destructuring ===");

const fruits = ["apple", "banana", "lemon", "pineapple", "mango"];
const [first, second, ...favoriteFruits] = fruits;

// Gives Error: Rest element must be last element
// const [...rest, first] = fruits;

console.log("Fruits: ", first, second, favoriteFruits);

/* === Object Destructuring === */
console.log("=== Objects Destructuring ===");

const person = { name: "john", job: "developer", city: "chicago" };
const { job, ...rest } = person;

// Same with Objects - Gives Error: Rest element must be last element
// const { ...rest, job } = fruits;

console.log("Person: ", job, rest);

/* === Function Parameters === */
console.log("=== Function Parameters ===");

const testScores = [3, 4, 24, 56, 78, 9];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);

  let total = 0;
  scores.map((score) => {
    total += score;
  });
  console.log(`${name}'s average score is ${total / scores.length}`);
};

// getAverage(person.name, 3, 4, 24, 56, 78, 9);

// Function Arguments - Spread Operator
getAverage(person.name, ...testScores);
