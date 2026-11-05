//8. Calculate the sum of all odd numbers from 1 up to n. 

const num = parseInt(process.argv.slice(2))
let n = 1
let sum = 0
while (n <= num) {
    if (n % 2 !== 0)
        sum = sum + n
    n++
}
console.log(sum)