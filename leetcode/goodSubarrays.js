/**
Given an integer array nums and an integer k, return the number of good subarrays of nums.
A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const n = nums.length;
  let same = 0,
    right = -1;
  const cnt = new Map();
  let pair = 0;
  for (let left = 0; left < n; ++left) {
    while (same < k && right + 1 < n) {
      ++right;
      same += cnt.get(nums[right]) || 0;
      cnt.set(nums[right], (cnt.get(nums[right]) || 0) + 1);
    }
    console.log(
      25,
      `left:${left}`,
      `right:${right}`,
      `nums[right]:${nums[right]}`,
      `same:${same}`
    );
    console.log(31, cnt);
    if (same >= k) {
      pair += n - right;
    }
    cnt.set(nums[left], cnt.get(nums[left]) - 1);
    same -= cnt.get(nums[left]);
    console.log(
      38,
      `left:${left}`,
      `right:${right}`,
      `nums[right]:${nums[right]}`,
      `same:${same}`,
      `pair:${pair}`
    );
    console.log(45, cnt);
    // for (let j = 0; j < nums.length; j++) {
    //     if (i < j) {
    //         if (nums[i] == nums[j]) {
    //             pair = pair + 1
    //         }
    //     }
    // }
  }
  return pair;
};

//console.log(countGood([1, 1, 1, 1, 1], 10)); //1
console.log(countGood([3, 1, 4, 3, 2, 2, 4], 2)); //4
