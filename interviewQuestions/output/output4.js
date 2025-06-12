function bar() {
  x = 10; // Implicitly global
}
bar();

console.log(typeof x); // "number" (x is global)
console.log(typeof y); // "undefined" (y was never defined)
/**
x is not declared with let, const, or var, so it becomes a global variable.
y is never defined, so typeof y returns "undefined".
 */
