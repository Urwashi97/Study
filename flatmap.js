//Flating the array

//Solution one
const input = [1, 3, 7, [6, 8], 9, 10, [11, 12], 6, 13];

const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
};

const output = flattenArray(input);
console.log(output); // [1, 3, 7, 6, 8, 9, 10, 11, 12, 13]

//Solution 2
let input1 = [1, 3, 7, [6, 8], 9, 10, [11, 12], 13];
let output1 = input.flat(1);
console.log(output);

//Solution 3

const input2 = [1, 3, 7, [6, 8], 9, 10, [11, 12], 13];

const output2 = input.flat(Infinity);
console.log(output); // [1, 3, 7, 6, 8, 9, 10, 11, 12, 13]
