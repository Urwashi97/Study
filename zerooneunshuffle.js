function unshuffleAndConvert(jumbledString) {
  // Helper function to extract words
  function extractWord(word, str) {
    let wordArray = word.split("");
    let strArray = str.split("");
    for (let char of wordArray) {
      let index = strArray.indexOf(char);
      if (index !== -1) {
        strArray.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  }

  // Step 1: Extract 'zero' and 'one' from the jumbled string
  let zeroCount = 0;
  let oneCount = 0;
  let remainingString = jumbledString;

  while (extractWord("zero", remainingString)) {
    zeroCount++;
    for (let char of "zero") {
      remainingString = remainingString.replace(char, "");
    }
  }

  while (extractWord("one", remainingString)) {
    oneCount++;
    for (let char of "one") {
      remainingString = remainingString.replace(char, "");
    }
  }

  // Step 2: Form the highest binary value
  let binaryDigits = "";
  binaryDigits += "1".repeat(oneCount); // Add all '1's first to form the highest value
  binaryDigits += "0".repeat(zeroCount); // Add all '0's next

  // Step 3: Split binary digits into space-separated numbers
  const spaceSeparatedNumbers = binaryDigits.split("").join(" ");

  // Step 4: Return the result
  return spaceSeparatedNumbers;
}

// Example usage:
const jumbledBinaryString = "oenzeornoezroe";
const result = unshuffleAndConvert(jumbledBinaryString);
console.log(result); // Output: "1 0"
