const obj = {
  count: 0,
  increment() {
    setTimeout(function () {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};

obj.increment(); // NaN (or undefined + 1)

/**
this inside setTimeout refers to the global object (window), not obj.
 */

const obj2 = {
  count: 0,
  increment() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};
obj2.increment(); // 1
