// This could be imagined as a 2D cartesian plane, with the x axis being represented by the alphabets and y axis by the numbers.

// Given coordinates in the form of string, print if that cell is white or black.

function determineColor(s) {
    // Write your logic here to determine the color based on the string s.
    // Return "Black" or "White" based on the problem statement.

    let odd=['a','c','e','g']
    let even =['b','d','f','h']
    let indexes = s.split('')
    if(odd.includes(indexes[0])&& Number(indexes[1])%2!==0){
        return 'Black'
    }else if(even.includes(indexes[0])&& Number(indexes[1])%2===0)return 'Black'
    else return 'White'
    
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const result = determineColor(input);
    console.log(result);
}

main();