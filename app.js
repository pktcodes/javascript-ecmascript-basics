// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
  name: "anna",
  age: 20,
  location: "chicago",
};

/* Entires */ -console.log("=== entires ===");
const result = Object.entries(person);
console.log(result);

/* Map */ -console.log("=== map ===");
const newResult = result.map((item) => {
  const [first, second] = item;
  // console.log(first, second);
  return first;
});
console.log(newResult);

/* for of */ -console.log("=== for of ===");
for (const [first, second] of result) {
  // const [first, second] = item;
  console.log(first, second);
}
