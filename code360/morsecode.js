// You are given a string of length N representing the morse code(s). You have to convert this code into the corresponding alphanumeric code containing small case english alphabet[a-z] and digits[0-9].

// For your convenience, the full table for the 26 letters of the English alphabet and 10 numeric digits is given below:

// list = [ ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----." ]      

// where list[0] represents morse code for ‘a’, list[1] represents morse code for ‘b’, and list[35] represents morse code for ‘9’. Similarly, each letter and numeric is mapped with a morse code given in the list.          

function morseToText(morseCode) {
  const morseList = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    "-----",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
  ];

  const charMap = {};

  // Map morse codes to corresponding characters
  for (let i = 0; i < 26; i++) {
    charMap[morseList[i]] = String.fromCharCode(97 + i); // 'a' to 'z'
  }
  for (let i = 0; i < 10; i++) {
    charMap[morseList[26 + i]] = String.fromCharCode(48 + i); // '0' to '9'
  }

  // Split the morseCode string into individual Morse code symbols
  const morseChars = morseCode.split(" ");

  // Convert Morse code to alphanumeric text
  let result = "";
  for (let code of morseChars) {
    if (charMap.hasOwnProperty(code)) {
      result += charMap[code];
    }
  }

  return result;
}

function main() {
  const testCases = parseInt(readLine().trim()); // Read the number of test cases

  for (let i = 0; i < testCases; i++) {
    let morseCode = readLine().trim(); // Read the Morse code string
    let decodedText = morseToText(morseCode); // Decode the Morse code
    console.log(decodedText); // Output the decoded string
  }
}

// Input handling setup
process.stdin.resume();
process.stdin.setEncoding("utf8");

var inputString = "";
var inputLines = [];
var currentLine = 0;

process.stdin.on("data", function (input) {
  inputString += input;
});

process.stdin.on("end", function () {
  inputLines = inputString.split("\n");
  main();
});

function readLine() {
  return inputLines[currentLine++];
}
