Array.prototype.myMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};
const num = [1, 2, 3];
const doubled = num.myMap((num) => num * 2);
console.log(doubled);
