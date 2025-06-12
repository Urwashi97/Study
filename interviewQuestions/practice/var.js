// console.log(dada);
function variable() {
  console.log(dada); // undefined
  console.log(vahini); //ReferenceError: vahini is not defined
  if (true) {
    var dada = `swapnil`;
    let vahini = `renuka`
    ;
  }
}
variable();
