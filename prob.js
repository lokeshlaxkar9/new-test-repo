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

let inputNumbers = parseInt(readLine());

for (let i = 0; i < inputNumbers; i++) {
  console.log(recursiveSum(parseInt(readLine())));
}

function recursiveSum(n) {
  let count = 1;
  let mult;
  if (n == 1) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    mult = 1;
    let j = 0;
    while (j < i) {
      mult *= count;
      count++;
      j++;
    }
    // console.log(mult);
  }
  // console.log(mult);

  return mult + recursiveSum(n - 1);
}
