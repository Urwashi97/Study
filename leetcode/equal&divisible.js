var countPairs = function (nums, k) {
  let n = nums.length;
  let pair = 0;
  for (let i = 0; i < n; i++) {
    // console.log(i);
    for (let j = n - 1; j >= 0; j--) {
      //   console.log(j);
      //   console.log(i, j, nums[i], nums[j]);
      if (i < j && nums[i] == nums[j]) {
        // console.log(6 % 2);
        if ((i * j) % k == 0) {
          pair = pair + 1;
        }
      }
    }
  }
  return pair;
};
console.log(countPairs([3, 1, 2, 2, 2, 1, 3])); //4
console.log(
  countPairs([5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3], 7)
); //18

/*************************************************************************************************************************************************************************/
var countPairs2 = function (nums, k) {
  let res = 0;
  let cMap = new Map(); // initialise map
  console.log(cMap);
  for (let i = 0; i < nums.length; ++i) {
    if (cMap.has(nums[i])) {
      console.log(cMap, nums[i]);
      // satify the first condition i.e nums[i]===nums[j]
      let val = checkMap(cMap.get(nums[i]), i);
      if (val) {
        res += val;
      }
      cMap.set(nums[i], [...cMap.get(nums[i]), i]); // add the position of the existing number in map
    } else {
      // if number does not exist create it in the map
      cMap.set(nums[i], [i]);
    }
  }
  return res;

  function checkMap(arr, pos) {
    // secondary function to check if previously position satisfy the condition i*j is divisible by j and return the count of such pairs
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] * pos) % k === 0) {
        count++;
      }
    }
    return count;
  }
};
console.log(
  countPairs2([5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3], 7)
); //18
