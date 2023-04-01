// Array includes() - checks if a string contains another string.
// Array includes - checks if the item is an array

const groceries = ["milk", "apple", "banana", "carrot"];

let item = "lemon";
item = "milk";

const isItemIncluded = groceries.includes(item, 1);
console.log(isItemIncluded);
