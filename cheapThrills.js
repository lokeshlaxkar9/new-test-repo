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

let testCases = parseInt(readLine());

for (let t = 0; t < testCases; t++) {
  let len = parseInt(readLine());
  let arr = readLine().trim().split(" ").map(Number);
  console.log(cheapQuestion(arr, len));
}

function cheapQuestion(arr, len) {
  let sortArr = [...arr];
  let count = 0;
  let map = new Object();

  sortArr.sort((a, b) => a - b);

  for (let j = 0; j < len; j++) {
    map[arr[j]] = j;
  }

  for (let i = 0; i < len; i++) {
    let previousPos = map[sortArr[i]] % 2 == 0 ? true : false;
    let currentPos = i % 2 == 0 ? true : false;
    if (previousPos != currentPos) {
      count++;
    }
  }
  return count / 2;
}
