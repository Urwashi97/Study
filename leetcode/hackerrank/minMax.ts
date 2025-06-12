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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
  // Write your code here
  let small = arr[0];
  let larger = arr[0];
  let smallest = 0;
  let largest = 0;
  arr.forEach((ele, i) => {
    if (ele < small) small = ele;
    if (ele > larger) larger = ele;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != small) {
      largest += arr[i];
    }
    if (arr[i] != larger) {
      smallest += arr[i];
    }
  }
  if (smallest == 0 && largest == 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      smallest += arr[i];
      largest += arr[i];
    }
  }
  console.log(smallest, largest);
}

function main() {
  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
