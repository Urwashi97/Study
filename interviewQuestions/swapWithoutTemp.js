let a = 5, b = -10;
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log(a, b); // ✅ Output: 10 5


let c = 5, d = -10;
c = c ^ d; // c = 5 ^ 10
d = c ^ d; // d = (5 ^ 10) ^ 10 => 5
c = c ^ d; // c = (5 ^ 10) ^ 5 => 10

console.log(c, d); // ✅ Output: 10 5
