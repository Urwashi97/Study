function getUnique(arr) {
  return [...new Set(arr)];
}

// Example usage:
const arr = [1, 2, 3, 3, 4, 5, 5];
const uniqueArr = getUnique(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

function getUnique2(arr2) {
  return arr2.filter((value, index, self) => {
    console.log(value, index, self);
    self.indexOf(value) === index;
  });
}

// Example usage:
const arr2 = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8];
const uniqueArr2 = getUnique2(arr2);
console.log(uniqueArr2); // Output: [1, 2, 3, 4, 5,6,7,8]
