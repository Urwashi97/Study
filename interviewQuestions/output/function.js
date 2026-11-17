function multiply(a, b) {
  console.log(arguments[0] * arguments[1]); //6
}
multiply(2, 3);

const multiplyArrow = (a, b) => {
  console.log(arguments[0] * arguments[1]); //NaN
};
multiplyArrow(2, 3);

const multiplyArrow2 = (a, b) => {
  console.log(arguments[0] * arguments[1]); //NaN
  return a * b;
};
console.log(multiplyArrow2(2, 3))//6