function myClassStr(name) {
  this.name = name;
  return this.name;
}

function myClassObj(name) {
  this.name = name;
  return () => name;
}

var child1 = new myClassStr("Nodejs");
var child2 = new myClassObj("JS");

console.log(typeof child1, typeof child2); //object function
