// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(),keys(),values(), forEach()

/* Set */ console.log("=== Set Object ====");
const unique = new Set();
console.log(new Set());

/* add */ console.log("=== add ===");
unique.add("first");
unique.add("first");
unique.add("first");
unique.add("second");
unique.add("third");
const add = unique.add(4);
console.log(unique, add);

/* delete */ console.log("=== delete ===");
const resultDelete = unique.delete("third");
const resultFive = unique.delete("five");
console.log(resultDelete);
console.log(resultFive);
console.log(unique);

/* has */ console.log("=== has ===");
const isValue = unique.has("second");
console.log(isValue);
console.log(unique.has(30));
console.log(unique);

/* clear */ console.log("=== clear ===");
unique.clear();
console.log(unique);
