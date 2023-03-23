// Arrow Functions or Fat Arrow Functions
// regular function - 'this' refers to parent, left of the dot
// arrow function - 'this' refers to it's current surrounding scope

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    // const self = this;
    console.log("Inside Bob SayName", this);
    setTimeout(() => {
      console.log("Inside Bob SetTimeout: ", this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log("Inside Anna SayName: ", this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();

// arrow checks for anna's surrounding scope which is global: window
anna.sayName();
