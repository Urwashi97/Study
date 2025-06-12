const nestedArray = [1, [2, [3, [4, 5]]], 6, [7]];
const flattenedArray = nestedArray.flat(Infinity);

console.log(...flattenedArray);
// Output: 1 2 3 4 5 6 7
function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(...flattenArray(nestedArray));
// Output: 1 2 3 4 5 6 7

