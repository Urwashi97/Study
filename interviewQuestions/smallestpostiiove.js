function findMissingPositive(arr) {
  const n = arr.length;

  // Step 1: Move all non-positive numbers to the end of the array
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap positive numbers to the front
      j++;
    }
  }

  // Step 2: Mark elements as visited by negating the corresponding index
  for (let i = 0; i < j; i++) {
    const num = Math.abs(arr[i]);
    if (num - 1 < j && arr[num - 1] > 0) {
      arr[num - 1] = -arr[num - 1];
    }
  }

  // Step 3: Find the first positive number's index which is the missing number
  for (let i = 0; i < j; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }

  // If all positives 1 to j are present, the missing number is j + 1
  return j + 1;
}

// Example usage:
const arr = [-1, -3];
console.log(findMissingPositive(arr)); // Output: 2

/**************************************************************************************************** */
function findMissingPositive2(arr2) {
  const numSet = new Set(arr2); // Step 1: Add all numbers to a set
  let missing = 1;

  // Step 2: Iterate from 1 upwards and check if it's in the set
  while (numSet.has(missing)) {
    missing++;
  }

  return missing;
}

// Example usage:
const arr2 = [-1, -2, -3];
console.log(findMissingPositive2(arr2)); // Output: 2
