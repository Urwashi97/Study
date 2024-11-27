function findPairs(arr, target) {
  let result = [];
  let seen = new Set();
  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      result.push([num, complement]);
    }
    seen.add(num);
  }
  return result;
}
console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
