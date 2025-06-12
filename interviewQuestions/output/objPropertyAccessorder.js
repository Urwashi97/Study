const obj = {
  foo: "bar",
  1: "one",
  2: "two",
  0: "zero",
};

console.log(Object.keys(obj)); // ["0", "1", "2", "foo"]
console.log(Object.values(obj)); // [ 'zero', 'one', 'two', 'bar' ]
