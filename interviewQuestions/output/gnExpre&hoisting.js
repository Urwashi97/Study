console.log(foo()); // Works
function foo() {
  return "Hello";
}

console.log(bar()); // TypeError: bar is not a function
var bar = function () {
  return "World";
};
/*
Function declarations (function foo() {}) are hoisted.
Function expressions (var bar = function() {}) are hoisted only as undefined, not as a function.

*/
