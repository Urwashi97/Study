//Write a function that takes a string and returns the first non-repeated character. If there is no such character, return null
function nonRepeater(s) {
  const a = [];
  for (let i = 0; i <= s.length; i++) {
    const newa = s.split(s[i]);
    console.log(newa, s[i]);
    if (newa.length == 2) {
      newa.forEach((element) => {
        if (!element.includes(s[i])) {
          console.log(9);
          return s[i];
        } else a.push(s[i]);
      });
    }
  }
  return null;
}
console.log(nonRepeater("asana"));
