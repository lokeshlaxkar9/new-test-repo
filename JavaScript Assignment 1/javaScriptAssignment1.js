let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let input = readLine().split(",");

let mass = parseInt(input[0]);
let height = parseInt(input[1]);

console.log(calculateBMR(mass, height));

function calculateBMR(mass, height) {
  if (mass === 0 || height === 0) {
    return "INVALID INPUT";
  } else {
    return mass / (height * height);
  }
}
