console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

setImmediate(() => {
  console.log("Immediate callback");
});

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

process.nextTick(() => {
  console.log("Next tick");
});

console.log("End");

//OutPut
/**
Start
End
Next tick
Promise resolved
Immediate callback
Timeout callback
 */
