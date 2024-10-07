// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// find the missing nos. from the sequential array.
// input: [1,2,4,5,6,7,10];
// output: [3,8,9]
const findMissingNos = (arr) => {
  // TODO:: check empty array
  let firstElement = arr[0];
  const result = [];
  for (let i = 0; i < arr.length; ) {
    if (firstElement != arr[i]) {
      result.push(firstElement);
    } else {
      i++;
    }
    firstElement++;
  }
  return result;
};
const ans = findMissingNos([1, 2, 3, 4, 5, 6, 9]);
console.log("result: ", ans);
