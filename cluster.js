/**
 Node.js has a built-in cluster module that can be used to scale the application across multiple CPU cores. This way, you can handle more requests by distributing them across multiple processes without blocking the event loop.
 */

const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  // Fork workers for each CPU core
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from worker");
    })
    .listen(8000);
}
