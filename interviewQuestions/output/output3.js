const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
  numbers.push(i + 1);
}

console.log(numbers); // => ??? 5

/**Semicolon after the for loop: The semicolon after the for loop (for (var i = 0; i < length; i++);) terminates the loop prematurely. The block following it is no longer part of the loop and is treated as a separate, standalone block that executes only once after the loop completes.

Scope of i: The loop runs, incrementing i from 0 to 4 (i < length), but because of the semicolon, it doesn’t do anything within the loop body.

Standalone block { numbers.push(i + 1); }: After the loop finishes, the { numbers.push(i + 1); } block executes. At this point, i equals 4 (the final value after the loop), so i + 1 equals 5.

However, because the i variable is used with var, it has a global or function scope, so its value persists into the block. The block is executed only once, and since i + 1 is evaluated as 5, the numbers array ends up with four NaN values.*/
