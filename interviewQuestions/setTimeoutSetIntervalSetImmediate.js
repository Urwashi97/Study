// Logs "Immediate!" first, followed by "Timeout!" and "Interval!" every second.

setImmediate(() => {
  console.log("Immediate!"); // Executes right after the current event loop cycle
});

setTimeout(() => {
  console.log("Timeout!"); // Executes once after 2 seconds
}, 3000);

let intervalID = setInterval(() => {
  console.log("Interval!"); // Executes every second
}, 1000);

// Stops the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval cleared after 5 seconds");
}, 5000);
