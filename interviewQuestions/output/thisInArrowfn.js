const obj = {
  value: 42,
  getValue: () => console.log(this.value),
};

obj.getValue(); // undefined
/**
Arrow functions do not have their own this. They inherit this from their lexical scope.
 */

const obj2 = {
  value: 42,
  getValue: function () {
    console.log(this.value);
  },
};
obj2.getValue(); // 42
