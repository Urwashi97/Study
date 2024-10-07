var str1 = "Welcome to this Javascript Guide!";
let str = ``;
let str2 = str1.split(" ");

str2.forEach((ele) => {
  let e = ``;
  for (let i = ele.length - 1; i >= 0; i--) {
    e = e + ele[i];
  }
  str = str + " " + e;
});
console.log(str.trim());

const strRev = str1.split("").reverse().join("");
console.log("strRev : ", strRev);
