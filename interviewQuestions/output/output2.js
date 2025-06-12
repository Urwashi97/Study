function foo() {
  let a = (b = 0);
  a++;
  return a;
}

foo();
console.log(typeof a); // => ??? undefined
console.log(typeof b); // => ??? number

/*
Here, b = 0 is an assignment expression that evaluates to 0.
let a = 0; declares a with let, which is block-scoped.
However, b is not declared using let, const, or var, so it implicitly becomes a global variable (equivalent to window.b = 0 in browsers).
a is incremented to 1, but b remains 0.
The function returns 1, but we don't store the return value.
a was declared inside foo with let, meaning it's not accessible outside the function.
typeof a will return "undefined", because a is not defined in the global scope.
b, however, was implicitly assigned globally (b = 0), making it available outside the function.
typeof b will return "number", because b holds the value 0.
*/