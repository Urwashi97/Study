function unshuffleAndConvert(binaryString) {
  // Step 1: Unshuffle the binary string
  // Count the occurrences of 'zero' and 'one'
  const zeroCount = (binaryString.match(/zero/g) || []).length;
  const oneCount = (binaryString.match(/one/g) || []).length;

  // Step 2: Convert 'zero' to '0' and 'one' to '1'
  let binaryDigits = "";
  binaryDigits += "1".repeat(oneCount); // Add all '1's first to form the highest value
  binaryDigits += "0".repeat(zeroCount); // Add all '0's next

  // Step 3: Split binary digits into space-separated numbers
  const spaceSeparatedNumbers = binaryDigits.split("").join(" ");

  // Step 4: Return the result
  return spaceSeparatedNumbers;
}

// Example usage:
const shuffledBinaryString = "onezerozerooneone";
const result = unshuffleAndConvert(shuffledBinaryString);
console.log(result); // Output: "1 1 0 0"
