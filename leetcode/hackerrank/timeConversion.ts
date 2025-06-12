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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
  // Write your code here
  if (s.includes("PM")) {
    const time = s.replace("PM", "").split(":");
    if (time[0] == "12") time[0] = `0`;
    const hour = (parseInt(time[0]) + 12).toString();
    return `${hour}:${time[1]}:${time[2]}`;
  } else {
    const time = s.replace("AM", "").split(":");
    if (time[0] == "12") {
      return `00:${time[1]}:${time[2]}`;
    } else return `${time[0]}:${time[1]}:${time[2]}`;
  }
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
