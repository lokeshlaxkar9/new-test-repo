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


let input = readLine().split("");
let d1 = parseInt(input[0]);
let d2 = parseInt(input[1]);
let d3 = parseInt(input[2]);

let check = "" + d1 +d2 + d3;


if(d1**3 + d2**3 + d3**3 == parseInt(check)){
	console.log("Yes");
}
else {
	console.log("No");
}
