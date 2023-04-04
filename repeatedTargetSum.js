// Geeks for Geeks and YouTube---> Ways to sum to N using array elements with repetition allowed

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

let input = readLine().split(" ").map(Number);
let arrLen = input[0];
let target = input[1];
let arr = readLine().split(" ").map(Number);

console.log(repeatedTargetSum(0, target, 0, arr));

function repeatedTargetSum(sum = 0, target, currentIdx = 0, arr) {
  if (target === sum) {
    return 1;
  }
  if (currentIdx === arrLen || sum > target) {
    return 0;
  }

  return (
    // WE CAN EITHER ADD THAT NO. AND NOT MOVE INDEX OR WE LEAVE THE NO. AND INCREMENT THE INDEX
    repeatedTargetSum(sum + arr[currentIdx], target, currentIdx, arr) +
    repeatedTargetSum(sum, target, currentIdx + 1, arr)
  );
}
