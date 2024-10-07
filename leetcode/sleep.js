// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
  if (millis >= 1 && millis <= 1000) {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
