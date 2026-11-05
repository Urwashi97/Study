//5. Print the multiplication table of a given number from n × 1 to n × 10. 
let n = 1
const a = process.argv.slice(2)
console.log(a)
while (n <= 10) {
    console.log(a * n)
    n++
}