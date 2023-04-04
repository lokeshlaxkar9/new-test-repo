let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let inputMatrixLength = parseInt(readLine());

let inputMatrix = [];

for (let i = 0; i < inputMatrixLength; i++) {
  inputMatrix.push(readLine().split(" "));
}

// console.log(inputMatrix);

let outputMatrixLength = inputMatrix[0].length;
let outputMatrix = [];
// console.log(outputMatrixLength);

let row = [];

for (let i = 0; i < outputMatrixLength; i++) {
  for (let j = inputMatrixLength - 1; j >= 0; j--) {
    row.push(parseInt(inputMatrix[j][i]));
  }

  outputMatrix.push(row);
  row = [];
}
console.log(outputMatrixLength);

for (let i = 0; i < outputMatrixLength; i++) {
  console.log(outputMatrix[i].join(" "));
}
