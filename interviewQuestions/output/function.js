function multiply(a, b) {
  console.log(arguments[0] * arguments[1]); //6
}
multiply(2, 3);

const multiplyArrow = (a, b) => {
  console.log(arguments[0] * arguments[1]); //NaN
};
multiplyArrow(2, 3);
