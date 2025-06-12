/*
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/
function LongestWord(sen) {
  // code goes here
  const senArray = sen.replace(/[^\w\s]/g, "").split(" ");
  let longestlength = 0;
  let longestWord = ``;
  senArray.forEach((ele) => {
    if (ele.length > longestlength) {
      longestlength = ele.length;
    }
  });

  senArray.forEach((ele) => {
    if (ele.length == longestlength && longestWord == ``) {
      longestWord = ele;
    }
  });

  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
