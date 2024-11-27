console.log(0.1 * 2 == 0.2); //true
console.log(0.1 * 2); //0.2
console.log(0.1 * 3 == 0.3); //false
console.log(0.1 * 3); //0.30000000000000004
console.log(5 < 4 < 3); //true
console.log(5 > 4 > 3); //false
console.log(018 - 015); //5
console.log(("b" + "a" + +"a" + "a").toLowerCase()); //banana
console.log("b" + +"a"); //bNaN

console.log(true + false); //1
// Number(true); // -> 1
// Number(false); // -> 0
// 1 + 0; // -> 1

console.log([, , ,].length); //3 [,,,] outputs an array with three empty slots. The last comma is a trailing comma.

console.log([1, 2, 3] + [4, 5, 6]); //"1,2,34,5,6"
// [1, 2, 3,] + [4, 5, 6]; // -> "1,2,34,5,6"
// [1, 2, 3] + [, 4, 5, 6]; // -> "1,2,3,4,5,6"
// [1, 2, 3, ""] + [4, 5, 6]; // -> "1,2,3,4,5,6"
// [...[1, 2, 3], ...[4, 5, 6]];//best practice

console.log(0.2 + 0.1 === 0.3); //false
// 0.2 + 0.1; // -> 0.30000000000000004;
// 0.2 + 0.1 > 0.3; // -> true

console.log(10, 2); //2
// 10, 2; // -> 2
// 1, 2, 3, 4; // -> 4
// 42, "pineapple", true; // -> true

console.log(!!""); //false
// !!""; // -> false
// !!0; // -> false
// !!"Pineapple"; // -> true
// !!42; // -> true

// Boolean(""); // -> false

console.log(+!![]); //1
// !![]; // -> true
// +true; // -> 1

console.log(parseInt(0.0000005)); //5
//String(0.0000005); // -> "5e-7"
// parseInt(0.5); // -> 0
// parseInt(0.05); // -> 0
// parseInt(0.005); // -> 0
// parseInt(0.0005); // -> 0
// parseInt(0.00005); // -> 0
// parseInt(0.000005); // -> 0
// parseInt(0.0000005); // -> 5

console.log(true == "true"); //false
// Number(true); // -> 1
// Number("true"); // -> NaN
// 1 == NaN; // -> false

console.log(60, { a: 1 } == { a: 1 });
console.log(61, { a: 1 } === { a: 1 });
