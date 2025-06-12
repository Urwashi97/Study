/**
Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.
Example 1:

Input: num = 33
Output: [10,11,12]
Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].
Example 2:

Input: num = 4
Output: []
Explanation: There is no way to express 4 as the sum of 3 consecutive integers.
 */

var sumOfThree = function (num) {
  for (let i = 1; i < num; i++) {
    let total = i + (i + 1) + (i + 2);
    if (total == num) {
      return [i, i + 1, i + 2];
    }
  }
  return [];
};
console.log(sumOfThree(33));
/**************************************************************************************************************************************************************/
var sumOfThree = function (num) {
  let i = parseInt((num - 3) / 3);
  const total = i + (i + 1) + (i + 2);
  if (!isNaN(i) && total == num) {
    return [i, i + 1, i + 2];
  }
  return [];
};
console.log(sumOfThree(33));
