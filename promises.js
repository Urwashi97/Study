//Binary Informatics Interview Questions Round 1:

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function asyncTask(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      // callback();
      resolve();
    }, delay);
  });
}

async function runTasksSequentially() {
  await asyncTask("Task 1", 1000);
  await asyncTask("Task 2", 500);
  await asyncTask("Task 3", 200);
  console.log("All tasks finished");
}

runTasksSequentially();
console.log("Try programiz.pro");

function hoistTest() {
  console.log(a);
  var a = 10;
  console.log(a);
  let b = 20;
  console.log(b);
}

hoistTest();

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("i", i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("j", j), 100);
}

const car = {
  model: "Tesla",
  getModel: function () {
    return this.model; // Tesla
  },
  getModelArrow: () => {
    return this.model; // undefined
  },
};

console.log(car.getModel());
console.log(car.getModelArrow());

function fact(num) {
  // base condition
  if (num == 0) {
    return 1;
  }

  let ans = num * fact(num - 1);
  return ans;
}

console.log("Output of fact is:", fact(3));

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: 10001,
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
  contacts: {
    email: "john@example.com",
    phone: {
      home: "555-1234",
      work: "555-5678",
    },
  },
  hobbies: ["reading", "traveling", "swimming"],
};

function printObj() {
  console.log("Person Obj:", person);
}
printObj();

// Input: aaaaaaaaabbbbbbbbbbbcccccccccccccccaa
// output: abc
function removeDuplicates(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let j = output.length - 1; // last index of output str
    if (
      output.indexOf(input.charAt(i)) &&
      output.charAt(j) != input.charAt(i)
    ) {
      output += input.charAt(i);
    }
  }
  // return output;
  console.log("Remove Duplicates: ", output);
}

removeDuplicates("aaaaaaaaabbbbbbbbbbbcccccccccccccccaa");
