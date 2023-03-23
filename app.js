// Arrow Functions or Fat Arrow Functions
// regular function - 'this' refers to parent, left of the dot
// arrow function - 'this' refers to it's current surrounding scope

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log(this);

  // Here, it points to window, since window is parent of setTimeOut
  // setTimeout(function () {
  //   console.log(this);
  //   this.style.color = "black";
  // }, 2000);

  // Here, it points to surrounding scope i.e btn
  setTimeout(() => {
    console.log(this);
    this.style.color = "black";
  }, 2000);
});
