let a = [1, 6, 1, 4, 6, 11];

let duplicates = a.filter((item, index) => {
  console.log(a.indexOf(item), index, a.lastIndexOf(item), item);
  return a.indexOf(item) !== index && a.lastIndexOf(item) === index;
});

console.log(duplicates); // Output: [1, 6]
