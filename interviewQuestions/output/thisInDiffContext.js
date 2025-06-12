const obj = {
  name: "Alice",
  sayName: function () {
    console.log(this.name);
  },
};

const say = obj.sayName;
say(); // undefined (in strict mode) or window.name (in browsers)
/**
 this in say() is the global object (window in browsers, undefined in strict mode).

 */
const sayFixed = obj.sayName.bind(obj);
sayFixed(); // "Alice"
