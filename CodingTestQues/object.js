let c = 1;

function test(c) {
  c = 2;
}

test(c);

console.log(c);
/************************************************************************************************/
let obj = { a: 1 };

function objTest(obj) {
  obj.a = 2;
}

objTest(obj);

console.log(obj.a);

/************************************************************************************************/
let obj1 = { a: 1 };
function objTest1(...obj1) {
  obj1.a = 2;
}

objTest1(obj1);

console.log(obj1.a);
