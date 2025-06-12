console.log("Hi");

setTimeout(() => {
  console.log("Inside SetTimeout");
}, 0);

Promise.resolve(console.log("Inside Promise"));

console.log("bye");
