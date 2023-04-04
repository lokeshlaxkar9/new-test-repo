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

let noOfElements = parseInt(readLine());

arrayA = readLine().trim().split(" ").map(Number);

let myMap = new Map();

ans = [];

for (let i = 0; i < arrayA.length; i++) {
  let divisors = 0;
  let num = arrayA[i];
  // console.log(arrayA[i]);
  while (num > 0) {
    if (arrayA[i] % num === 0) {
      divisors++;
    }
    num--;
  }
  myMap.set(arrayA[i], divisors);
  ans.push(divisors);
}
ans.sort((a, b) => a - b);
console.log(ans);
console.log(myMap);

let finalAns = 0;

let count = 1;

for (let i = 0; i < ans.length; i++) {
  if (ans[i] == ans[i + 1]) {
    count++;
    if (count == 2) {
      finalAns++;
      count = 1;
    }
  } else {
    count = 1;
  }
}

console.log(finalAns);
