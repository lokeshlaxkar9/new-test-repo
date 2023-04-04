let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let n = parseInt(readLine());
let sum = 0;
let k = n;

while( n > 0) {
    let rem = parseInt(n%10);
    sum = sum + rem * rem * rem ;
    n = parseInt(n/10);
}

if (sum == k) {
    console.log("Yes");
}

else {
    console.log("No");
}
