// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((value) => {
    let sum = 0;
    value.forEach((v) => {
      sum = sum + v;
    });
    return sum;
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

// promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
// promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
