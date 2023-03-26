// for of - loops through the values of an iterable object
// String, Array,Map,Set etc  - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ["apple", "orange", "lemon", "banana", "peach"];
const longName = "John Smith Pepper III";

/* String */
let shortName = "";

for (const letter of longName) {
  if (letter === "") {
    continue;
  } else {
    shortName = shortName + letter;
  }
}
console.log("Short Name: ", shortName);

/* Array */
for (const fruit of fruits) {
  if (fruit === "banana") {
    // break;
    continue;
  }
  console.log("Fruit: ", fruit);
}

// break - stop whatever you are doing
// continue - do not anything more, just to go over to next item in iteration
