function rotateArray(arr, k) {
  k = k % arr.length; // Handle cases where
  console.log(k);
  return arr.slice(-k).concat(arr.slice(0));
  //   return arr.splice(-k).concat(arr.splice(0));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
