// Regular function
function addfn(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

/***************************************************************************/
let name = "jane";
const person = {
  name: "Bob",
  sayName: function () {
    console.log(1, this.name); // Works as expected, 'this' refers to 'person'
  },
  sayNameArrow: () => {
    console.log(2, this.name); // 'this' refers to the global or outer context, not 'person'
  },
};
person.sayName(); // Output: Bob
person.sayNameArrow(); // Output: undefined (or some outer context's value)

class Parent {
  sayHello() {
    return "Hello from Parent";
  }
}

/***************************************************************************/

class Child extends Parent {
  // Normal function
  normalFunction() {
    return super.sayHello(); // Can access 'super' to call parent method
  }

  // Arrow function
  arrowFunction = () => {
    return super.sayHello(); // 'super' will not work as expected here
  };
}

const child = new Child();
console.log(3, child.normalFunction()); // Output: "Hello from Parent"
console.log(4, child.arrowFunction()); // Output: Error (ReferenceError: super is not defined)

/***************************************************************************/

function regularFunc() {
  console.log(5, arguments); // outputs the arguments passed
}

const arrowFunc = (...args) => {
  console.log(6, args); // uses rest parameters to gather arguments
};
regularFunc(1, 2, 3); // Output: [1, 2, 3]
arrowFunc(1, 2, 3); // Output: [1, 2, 3]

/***************************************************************************/
let name1 = "Renuka";
const obj = {
  name1: "Swap",
  regularFunction: function () {
    console.log(7, this.name1); // 'this' refers to the obj, so this.name is 'Swap'
  },
  arrowFunction: () => {
    console.log(8, this.name1); // 'this' refers to the outer scope, so it may be undefined
  },
};

obj.regularFunction(); // Output: Swap
obj.arrowFunction(); // Output: undefined (or from a broader outer context)
