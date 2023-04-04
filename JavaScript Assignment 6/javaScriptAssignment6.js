let fs = require("fs");
const { get } = require("http");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let cb = function (value) {
  return value;
};

let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
  let input = readLine().trim().split(",").map(Number);
  let a = input[0];
  let b = input[1];
  console.log(add(a, b, cb));
}

function add(a, b, cb) {
  let sum = a + b;
  return cb(sum);
}

// function cb(value) {
//   return value;
// }
