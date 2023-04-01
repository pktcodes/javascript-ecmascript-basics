// new Set() - accepts iterable objects

const products = [
  {
    title: "high-back bench",
    company: "ikea",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "ikea",
  },
];

/* To get unique companies */ console.log("=== Long Way ===");

const companies = products.map((item) => item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

const finalCompanies = ["all", ...uniqueCompanies];
console.log(finalCompanies);

/* Refactor to One Line */ console.log("=== Short Way ===");

const result = [...new Set(products.map((item) => item.company))];
console.log(result);
