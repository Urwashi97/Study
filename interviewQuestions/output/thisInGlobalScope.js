function globalScope() {
  this.someValue = 42;
}

globalScope();
console.log(someValue); // 42 (attached to `window`)


"use strict";
function strictMode() {
  this.someValue = 42; // Error: Cannot set property of undefined
}
strictMode();

console.log(someValue);

//"use strict"; prevents this from referring to the global object.