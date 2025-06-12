Promise.resolve(1)
  .then((x) => x + 1) // Step 1
  .then((x) => {
    throw new Error("Error!");
  }) // Step 2
  .catch((err) => "Recovered from error") // Step 3
  .then((x) => console.log(x)); // Step 4

///Recovered from error
