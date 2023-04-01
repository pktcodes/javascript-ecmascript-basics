// String includes() - checks if a string contains another string.

console.log("=== Case Sensitive ===");
const product = {
  title: "Leather Chair",
};
console.log(product.title.includes("le"));

console.log("=== 2nd Argument ===");
const firstName = "peter";
const result = firstName.includes("pe", 0);
console.log(result);

/* Products */
const products = [
  { title: "Modern Poster" },
  { title: "Bar Stool" },
  { title: "Armchair" },
  { title: "Leather Chair" },
];

const searchTitle = "a";

const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(searchTitle)
);
console.log(filteredProducts);
