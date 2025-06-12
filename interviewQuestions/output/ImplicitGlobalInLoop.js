for (i = 0; i < 3; i++) {
  // No `let` or `var`
  console.log(i); //0 ,1,2,3
}
console.log(i); // 3 (i is global)

for (let j = 0; j < 3; j++) {
  console.log(j); //0,1,2
}
console.log(typeof j); // "undefined"
/**
let j ensures j is block-scoped
 */