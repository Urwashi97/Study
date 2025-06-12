const p1 = Promise.reject(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((value) => {
    console.log("all--", value);
  })
  .catch((err) => {
    console.log(" all err", err);
  });

Promise.race([p1, p2, p3])
  .then((value) => {
    console.log("race --", value);
  })
  .catch((err) => {
    console.log("race err", err);
  });

Promise.allSettled([p1, p2, p3])
  .then((value) => {
    console.log("allSettled --", value);
  })
  .catch((err) => {
    console.log("allSettled err", err);
  });

Promise.any([p1, p2, p3])
  .then((value) => {
    console.log("any --", value);
  })
  .catch((err) => {
    console.log("any err", err);
  });
