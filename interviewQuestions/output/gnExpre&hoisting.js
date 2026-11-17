console.log(foo()); // Hello
function foo() {
  return "Hello";
}

console.log(bar()); // TypeError: bar is not a function
var bar = function () {
  return "World";
};

console.log(baz()); // ReferenceError: Cannot access 'baz' before initialization
let baz = function () {
  return "!";
};

console.log(qux()); // ReferenceError: Cannot access 'qux' before initialization
const qux = function () {
  return "?";
};
/*
Function declarations (function foo() {}) are hoisted.
Function expressions (var bar = function() {}) are hoisted only as undefined, not as a function.

*/
