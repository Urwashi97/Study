function reverseWords(sentence) {
  return sentence
    .split(" ") // Split the sentence into words
    .reverse() // Reverse the array of words
    .join(" ") // Join them back into a string
    .replace(/\?$/, ""); // Remove the trailing question mark (optional)
}

let input = "How are you doing today?";
let output = reverseWords(input);
console.log(output); // "Today doing you are how"

/*88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/
function reverseWords2(sentence) {
  // Extract question mark if present
  let hasQuestionMark = sentence.endsWith("?");

  // Remove question mark temporarily, split, reverse, and join back
  let reversedSentence = sentence
    .replace(/\?$/, "") // Remove question mark temporarily
    .split(" ") // Split the sentence into words
    .reverse() // Reverse the array of words
    .join(" "); // Join them back into a string

  // Add the question mark back if it was there
  return hasQuestionMark ? reversedSentence + "?" : reversedSentence;
}

let input2 = "How are you doing today?";
let output2 = reverseWords2(input2);
console.log(output2); // "Today doing you are how?"

/*88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/
function reverseWords3(sentence) {
  let hasQuestionMark = sentence.endsWith("?"); // Check for a question mark

  let words = sentence
    .replace(/\?$/, "") // Remove the question mark temporarily
    .split(" ") // Split into words
    .reverse(); // Reverse the words

  // Convert first word to lowercase and the new first word to uppercase
  words[0] = words[0].toLowerCase(); // Convert first word (which was last) to lowercase
  words[words.length - 1] =
    words[words.length - 1][0].toUpperCase() + words[words.length - 1].slice(1); // Capitalize new first word

  let reversedSentence = words.join(" ") + (hasQuestionMark ? "?" : ""); // Add back the question mark

  return reversedSentence;
}

let input3 = "How are you doing today?";
let output3 = reverseWords3(input3);
console.log(output3); // "Today doing you are how?"

/*888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/
function reverseWords4(sentence) {
  let hasQuestionMark = sentence.endsWith("?"); // Check if the sentence ends with '?'

  let words = sentence
    .replace(/\?$/, "") // Remove '?' temporarily
    .split(" ") // Split into words
    .reverse(); // Reverse the words

  // Ensure the first word (which was last in the original sentence) is capitalized
  words[0] = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase();

  // Ensure the last word (which was first in the original sentence) is lowercase
  words[words.length - 1] = words[words.length - 1].toLowerCase();

  let reversedSentence = words.join(" ") + (hasQuestionMark ? "?" : ""); // Add '?' back

  return reversedSentence;
}

let input4 = "How are you doing today?";
let output4 = reverseWords4(input4);
console.log(output4); // "Today doing you are how?"
