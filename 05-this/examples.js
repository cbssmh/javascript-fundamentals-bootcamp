const obj = {
  name: "JS",
  normalFunc: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

obj.normalFunc(); // "JS"
obj.arrowFunc();  // undefined

function showThis() {
  console.log(this);
}

showThis(); // window or undefined (strict)
