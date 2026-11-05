a = [1, 2, 3]


console.log("map():", a.map(x => x * 2))
console.log("filter():", a.filter(x => x > 2))
console.log("reduce():", a.reduce((a, b) => a + b))
console.log("forEach()", a.forEach(x => console.log(x)))
console.log("some():", a.some(x => x > 2))
console.log("every():", a.every(x => x > 3))
console.log("find", a.find(x => x > 1))
console.log("includes", a.includes(2))
// console.log("all():", a.all(x => x > 2))