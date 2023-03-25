// default parameters - a fallback to a value to prevent incase functionality breaks if the parameter is not passed i.e undefined. The argument/parameter passed will have more precedence than the default parameter

// arrow function gotchas - hositing doesn't work since it has variable name to defined

sayHi();

const john = "John";
const anna = "Anna";

function sayHi(person = "Peter") {
  console.log(`Hi ${person}`);
}

const sayHello = (person = "Bob") => {
  console.log(`Hello ${person}`);
};
sayHello(anna);
