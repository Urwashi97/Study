//12. Reverse the given number and print the reversed value. 

let num = process.argv.splice(2)[0]
let rev = ``
let lengthOfnum = num.length - 1
while (lengthOfnum >= 0) {
    rev = rev + num[lengthOfnum]
    lengthOfnum--
}
console.log(`Reverse===========>>>>`, rev)