/***************************** Immediate Resolution (Resolved Synchronously)***********************************************/

const immediatePromise = Promise.resolve("Immediate resolution");
immediatePromise.then((value) => {
  console.log(value); // Output: Immediate resolution
});

console.log("This is immediatePromise synchronous");
// Output:
// This is synchronous
// Immediate resolution

/***************************** Timeout Resolution (Resolved After a Delay)***********************************************/

const delayedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Resolved after 2 seconds"), 2000);
});

delayedPromise.then((value) => {
  console.log(value); // Output after 2 seconds: Resolved after 2 seconds
});

console.log("This is delayedPromise synchronous");
// Output:
// This is synchronous
// (2 seconds later)
// Resolved after 2 seconds

/***************************** Chained Promises with Different Timing***********************************************/

const firstPromise = new Promise((resolve) => {
  setTimeout(() => resolve("First promise resolved"), 1000);
});

const secondPromise = firstPromise.then((value) => {
  console.log(value); // Output after 1 second: First promise resolved
  return new Promise((resolve) => {
    setTimeout(() => resolve("Second promise resolved"), 2000);
  });
});

secondPromise.then((value) => {
  console.log(value); // Output after another 2 seconds: Second promise resolved
});

/***************************** Rejected Promise***********************************************/

const rejectedPromise = new Promise((_, reject) => {
  setTimeout(() => reject("Promise rejected"), 1500);
});

rejectedPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error); // Output after 1.5 seconds: Promise rejected
  });

/***************************** Promise.all() with Different Timings***********************************************/

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 3000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3 resolved"), 2000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output after 3 seconds: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
});

/***************************** Promise.race() with Different Timings***********************************************/

const fastPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Fast promise resolved"), 1000);
});

const slowPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Slow promise resolved"), 3000);
});

Promise.race([fastPromise, slowPromise]).then((value) => {
  console.log(value); // Output after 1 second: Fast promise resolved
});

/***************************** Promise with Immediate Rejection***********************************************/

const immediateReject = Promise.reject("Immediate rejection");

immediateReject.catch((error) => {
  console.log(error); // Output: Immediate rejection
});

console.log("This is immediateReject synchronous");
// Output:
// This is synchronous
// Immediate rejection

/**
 This is immediatePromise synchronous
This is delayedPromise synchronous
This is immediateReject synchronous
Immediate resolution
Immediate rejection
First promise resolved
Fast promise resolved
Promise rejected
Resolved after 2 seconds
[ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
Second promise resolved
 */
