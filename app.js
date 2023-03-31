// find - gets the specific item
// findIndex - gets the index of the item
// every - every item in the array needs to meet condition
// some -  atleast one item

const people = [
  { id: 0, name: "peter" },
  { id: 1, name: "susan" },
  { id: 2, name: "anna" },
];

/* To get Anna - But filter returns an array,so need index to access */
console.log("=== filter ===");
const anna = people.filter((person) => person.name === "anna");
console.log("Filter Anna: ", anna);
console.log("Filter Anna: Name:", anna[0].name);

/* find - returns an item*/
console.log("=== find ===");
const searchAnna = people.find((person) => person.name === "anna");
console.log("searchAnna: ", searchAnna);
console.log("searchAnnaName: ", searchAnna.name);

/* findIndex  - return the index of the item*/
console.log("=== findIndex ===");
const searchAnnaIndex = people.findIndex((person) => person.name === "anna");
console.log("SearchAnnaIndex: ", searchAnnaIndex);
console.log("SearchAnnaIndexSliced: ", people.slice(0, searchAnnaIndex));

const grades = ["A", "B", "A", "B", "C"];
const goodGrades = ["A", "B", "A", "B"];

/* every - return true if all the items accept the search criteria*/
console.log("=== every ===");
const allGoodGrades = goodGrades.every((grade) => grade !== "C");
console.log("allGoodGrades: ", allGoodGrades);

/* some - returns true if one item is found within search criteria*/
console.log("=== some ===");
const oneBadGrade = goodGrades.some((grade) => grade === "C");
console.log("oneBadGrade: ", oneBadGrade);
