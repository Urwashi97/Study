function arrangePromises(action, onSuccess, onSecondSuccess, onError, cleanup) {
  onSuccess().then((result) => {
    return new arrangePromises(
      Promise.resolve("First promise!")
        .then((result) => {
          console.log(result);
          return Promise.resolve("Second promise!");
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("Error!", error);
        })
        .finally(() => {
          console.log("Cleanup!");
        })
    );
  });
}

module.exports.arrangePromises = arrangePromises;
