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

//take inputs
let a1 = parseInt(readLine());
let a2 = parseInt(readLine());
let a3 = parseInt(readLine());

//processing inputs

let d =  a3- a2; // d is the difference in Arithmatic Progression

// Acc. to A.P formula (Nth term = a1 + (n-1)d  where )
//We have to calculate 4th term so here n will be 4
let n = 4; // as n is 4th term 

let a4 = a1 + (n-1) * d;

//printing the output:
console.log(a4);
