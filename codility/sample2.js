//You are given an array of size n containing distinct integers taken from the range 1 to n+1. Find the missing number in the array.
function missingNumber(arr) {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (!arr.includes(i)) return i;
  }
}
console.log(missingNumber([1, 3, 4, 6, 8, 2, 5, 10, 9, 11]));
