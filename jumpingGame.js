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

function jumpingGame(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  result = Math.min(
    1 + jumpingGame(arr, index + arr[index]),
    1 + jumpingGame(arr, index + 1)
  );
  return result;
}

let arrayLength = parseInt(readLine());

let arr = readLine().split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}

console.log(jumpingGame(arr));
