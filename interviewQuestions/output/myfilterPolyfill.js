Array.prototype.myFilter = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

const nums = [10, 15, 20, 25, 30];
const greaterThanTwenty = nums.myFilter((num) => num > 20);
console.log(greaterThanTwenty);
