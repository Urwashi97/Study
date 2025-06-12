var message;

function message() {
  console.log("show");
}

console.log(`message : ${message}`); //[Function: message]
console.log(`typeof message : ${typeof message}`);
console.log(`message() : ${message()}`);
/**
message : function message() {
  console.log("show");
}
typeof message : function
show
message() : undefined
 */
