// 14. Find and print the sum of digits of the given number.
const num = process.argv[2];


let sumOfDigits = 0;
let numLength = num.length - 1
while (numLength >= 0) {
    sumOfDigits = sumOfDigits + Number(num[
        numLength
    ])
    numLength--
}
console.log(sumOfDigits)


//Wrtitten by ChatGPT
const arg = process.argv[2];

if (arg === undefined) {
    console.log('Usage: node sumOfDigits.js <integer>');
    process.exit(1);
}

let n = Math.abs(Number(arg));
if (!Number.isFinite(n) || Number.isNaN(n)) {
    console.log('Provide a valid integer.');
    process.exit(1);
}

n = Math.floor(n);
let sum = 0;

while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log(sum);