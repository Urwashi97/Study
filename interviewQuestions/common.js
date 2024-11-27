function getCommonElements(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

// Example usage:
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const commonElements = getCommonElements(arr1, arr2);
console.log(commonElements); // Output: [3, 4]

function getCommonElements2(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter((value) => set2.has(value));
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const commonElements2 = getCommonElements2(array1, array2);
console.log(commonElements2); // Output: [3, 4]
