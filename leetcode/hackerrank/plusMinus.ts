"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  // Write your code here
  let neg = 0;
  let pos = 0;
  let zero = 0;
  arr.forEach((ele) => {
    if (ele == 0) zero++;
    else if (ele < 0) neg++;
    else if (ele > 0) pos++;
  });
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
