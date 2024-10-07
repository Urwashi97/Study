/*************************EXAMPLE 1***************************** */
function* showPrices(i) {
  while (i < 3) {
    yield i++;
  }
}

//creating an object for our function showPrices
const gfg1 = showPrices(0);

//return 0 because 0 value is passed to the showPrices yield expression
console.log(gfg1.next().value);

// return 1
console.log(gfg1.next().value);

//return 2
console.log(gfg1.next().value);

/*************************EXAMPLE 2***************************** */

function* geeksforGeeks() {
  /*expression paused here and return 
  value is undefined as nothing is declared*/
  yield;

  //wait for next() to finish
  gfg(yield "Welcome to GFG");
}

function gfg(x) {
  console.log("Hello World ", x); // on third generator call return  Hello World  undefined
}

var generator = geeksforGeeks();

//return { value: undefined, done: false }
console.log(generator.next());

//return { value: 'Welcome to GFG', done: false }
console.log(generator.next());

//return { value: undefined, done: true }
console.log(generator.next());

/*done remains false as we have not called next  
so that "Hello World" is still left there to process*/
