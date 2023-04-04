let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let testCases = parseInt(readLine());

for (let i = 0; i < testCases; i++) {
  let input = readLine().trim().split(" ").map(Number);
  let n = parseInt(readLine());
  console.log(getEven(input));
  console.log(multiplyByN(input, n));
  console.log(removeIndexValue(input, n));
}

function getEven(array) {
  let evenArray = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;
}

function multiplyByN(array, n) {
  return array.map((value) => value * n);
}

function removeIndexValue(array, n) {
  array.splice(n, 1);
  return array;
}
