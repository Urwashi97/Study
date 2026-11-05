//10. Find and print the product of all digits of a given number. 

let num = process.argv.slice(2)
let a = num[0].split('')
n = 0
product = 1
while (n < a.length) {
    product = product * a[n]
    n++
}
console.log("Product =>", product)
