let a = [1, 2, 3];

Array.prototype.sum = function () {
  return this.reduce((arr, crr) => arr + crr, 0);
};

console.log(a.sum());
