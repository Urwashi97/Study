//6. Calculate and print the sum of the first n natural numbers. 

let n = 1
let sum = 0
const num = parseInt(process.argv.slice(2))
while (n <= num) {
    sum = sum + n
    n++
}
console.log(sum)

const sumOfNaturalNumber = (num * (num + 1)) / 2
console.log(`sumOfNaturalNumber=>`, sumOfNaturalNumber)
