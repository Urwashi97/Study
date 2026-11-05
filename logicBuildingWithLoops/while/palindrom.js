//13. Check whether the given number is a palindrome. 

let num = process.argv.splice(2)[0]
//12321
let numLength = num.length - 1
let midway = numLength / 2
let palindrome = false
while (midway >= 0) {
    if (num.charAt(midway) == num.charAt(numLength - midway)) {
        palindrome = true
    } else {
        palindrome = false
    }
    midway--
}
console.log(palindrome)