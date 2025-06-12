function example() {
  var a = 1;
  if (true) {
    var a = 2; // Same variable (function-scoped)
  }
  console.log(a); // 2
}
example();

function example2() {
  let b = 1;
  if (true) {
    let b = 2; // Different variable (block-scoped)
  }
  console.log(b); // 1
}
example2();
