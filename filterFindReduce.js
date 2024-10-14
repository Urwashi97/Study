const numbers = [1, 2, 3, 4, 5];

// Filter for even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Find the first even number
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// Sum of all numbers in the array
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mark", age: 35 },
];

// Filter: Find all people older than 28
const olderThan28 = people.filter((person) => person.age > 28);
console.log(olderThan28); // Output: [{ name: 'Jane', age: 30 }, { name: 'Mark', age: 35 }]

// Find: Find the first person older than 28
const firstOlderThan28 = people.find((person) => person.age > 28);
console.log(firstOlderThan28); // Output: { name: 'Jane', age: 30 }

// Reduce: Get the total age of all people
const totalAge = people.reduce((total, person) => total * person.age, 0);
console.log(totalAge); // Output: 90
