const num = [1, 2, 3];
num.push(4);
console.log(num); //[1, 2, 3, 4]

const num2 = [1, 2, 3];
const newNum = [...num2, 4];
console.log(newNum); //[(1, 2, 3, 4)];
