/**
write a polyfill for forEach.it had to support async/await.
That meant ensuring that the callback function — 
which could include asynchronous operations — 
runs sequentially, not in parallel.
 */

Array.prototype.asyncForEach = async function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    await callback.call(thisArg, this[i], i, this);
  }
};
