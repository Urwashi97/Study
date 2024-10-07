/*************************EXAMPLE 1***************************** */
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// …
/*************************EXAMPLE 2***************************** */
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen2 = generator(10);

console.log(gen2.next().value); // 10
console.log(gen2.next().value); // 11
console.log(gen2.next().value); // 12
console.log(gen2.next().value); // 13
console.log(gen2.next().value); // 20

/*************************EXAMPLE 3***************************** */
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen3 = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen3.next(); // 0
gen3.next("pretzel"); // 1 pretzel
gen3.next("california"); // 2 california
gen3.next("mayonnaise"); // 3 mayonnaise

/*************************EXAMPLE 4***************************** */
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const gen4 = yieldAndReturn();
console.log(gen4.next()); // { value: "Y", done: false }
console.log(gen4.next()); // { value: "R", done: true }
console.log(gen4.next()); // { value: undefined, done: true }

/*************************EXAMPLE 5***************************** */
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen5 = someObj.generator();

console.log(gen5.next()); // { value: 'a', done: false }
console.log(gen5.next()); // { value: 'b', done: false }
console.log(gen5.next()); // { value: undefined, done: true }

/*************************EXAMPLE 6***************************** */
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen6 = f.generator();

console.log(gen6.next()); // { value: 1, done: false }
console.log(gen6.next()); // { value: 2, done: false }
console.log(gen6.next()); // { value: 3, done: false }
console.log(gen6.next()); // { value: undefined, done: true }

/*************************EXAMPLE 7***************************** */
class Foo2 {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(Array.from(new Foo2())); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]

/*************************EXAMPLE 8***************************** */
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}

/*************************EXAMPLE 9***************************** */
function* powers(n) {
  //endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // controlling generator
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}

/*************************EXAMPLE 10***************************** */

function* countGenerator() {
  let count = 0;
  while (count < 5) {
    yield count;
    count++;
  }
}

const counter = countGenerator();

console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: 4, done: false }
console.log(counter.next()); // { value: undefined, done: true }

/*************************EXAMPLE 11***************************** */

function* calculator() {
  const num1 = yield "Enter first number";
  const num2 = yield "Enter second number";
  return num1 + num2;
}

const calc = calculator();

console.log(calc.next()); // { value: "Enter first number", done: false }
console.log(calc.next(5)); // { value: "Enter second number", done: false }
console.log(calc.next(3)); // { value: 8, done: true }
