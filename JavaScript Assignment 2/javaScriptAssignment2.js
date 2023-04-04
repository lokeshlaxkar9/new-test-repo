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
let resultantArray = [];
for (let i = 0; i < testCases; i++) {
  let input = readLine().trim();
  if (input === "add") {
    resultantArray.push(readLine().trim());
  } else if (input === "remove") {
    resultantArray.pop();
  }
  console.log(resultantArray);
}
