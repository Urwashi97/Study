const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.a = 5;
console.log(original.a); // 1
console.log(shallowCopy.a); //5
