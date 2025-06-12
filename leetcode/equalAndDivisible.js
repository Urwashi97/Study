/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 */
var countPairs = function (nums, k) {
  let pair = 0;
  for (let i = 0; i <= nums.length; i++) {
    for (j = 1; j <= nums.length; j++) {
      if (i < j && nums[i] == nums[j]) {
        if ((i * j) % k === 0) {
          pair++;
        }
      }
    }
  }
  return pair;
};
console.log(
  countPairs([5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3], 7)
); //18
