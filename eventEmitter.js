const EventEmitter = require("events");

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit("greet", "Alice");

/***************************** Example 2***********************************************/
myEmitter.once("greet2", (name) => {
  console.log(`Hello, ${name}! This will happen only once.`);
});

myEmitter.emit("greet2", "Emma"); // Output: Hello, Alice! This will happen only once.
myEmitter.emit("greet2", "Bob"); // No output

/***************************** Example 3***********************************************/

myEmitter.on("message", () => {
  console.log("Listener 1: Received message");
});

myEmitter.on("message", () => {
  console.log("Listener 2: Received message");
});

myEmitter.emit("message");
// Output:
// Listener 1: Received message
// Listener 2: Received message

/***************************** Example 4***********************************************/
myEmitter.on("error", (err) => {
  console.error("An error occurred:", err.message);
});

myEmitter.emit("error", new Error("Something went wrong!"));
// Output: An error occurred: Something went wrong!

/***************************** Example 5***********************************************/
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

// The 'request' event is emitted every time the server gets an HTTP request
server.on("request", (req, res) => {
  console.log("A new request received");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
