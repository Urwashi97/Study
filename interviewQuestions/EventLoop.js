/***************************************************** Event loop in JS ******************************************************************/
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
/**
 Start
End
Promise
setTimeout
 */

/***************************************************** Event loop in NodeJS ******************************************************************/
console.log("Start1");

setTimeout(() => console.log("setTimeout1"), 0);
setImmediate(() => console.log("setImmediate1"));

Promise.resolve().then(() => console.log("Promise1"));
process.nextTick(() => console.log("nextTick1"));

console.log("End1");
/**
Start
End
nextTick
Promise
setTimeout / setImmediate (depends on execution)
 */
