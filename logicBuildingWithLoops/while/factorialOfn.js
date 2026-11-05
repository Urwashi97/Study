//9. Calculate and print the factorial of a given number. 

const num = parseInt(process.argv.slice(2))
let n = 1
let fact = 1
while (n <= num) {
    fact = fact * n
    n++
}
console.log(fact)

// 1
// 2 =>2
// 3 =>6
// 4 => 24
// 5 =>120
// 6=> 720
// 7=> 5040
// 8=> 40320