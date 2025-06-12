function test() {
  if (true) {
    var a = 100; // Function-scoped
    let b = 200; // Block-scoped
  }
  console.log(a); // 100 (accessible)
  console.log(b); // ReferenceError (b is block-scoped)
}

test();

/**
var a is function-scoped, so it is accessible outside the if block.
let b is block-scoped, so it's not accessible outside the if block.
 */
