//Sroting Algorithm
let a = [9, 8, 4, 5, 1, 3];
let b = [];
let temp;
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (a[i] < a[j]) {
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
console.log(13, a);
