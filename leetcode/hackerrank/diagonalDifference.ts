"use strict";

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
  // Write your code here
  console.log(arr);
  let suml2r = 0;
  let sumr2l = 0;
  let i = 0;
  let j = arr[0].length - 1;
  arr.forEach((ele) => {
    suml2r += ele[i];
    i++;
  });
  arr.forEach((ele) => {
    sumr2l += ele[j];
    j--;
  });
  return Math.abs(suml2r - sumr2l);
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  let arr: number[][] = Array(n);

  for (let i: number = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result: number = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
