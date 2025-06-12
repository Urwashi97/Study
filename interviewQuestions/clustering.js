const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length; // Get number of CPU cores

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart workers if they die
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker processes
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from Worker ${process.pid}\n`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
/**
 * 
Master 12345 is running
Worker 12346 started
Worker 12347 started
Worker 12348 started
Worker 12349 started



The master process (PID 12345) forks 4 worker processes (one per CPU).
When a request comes in, the OS distributes it among workers.
 */