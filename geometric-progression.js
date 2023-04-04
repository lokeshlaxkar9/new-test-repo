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

//Taking Inputs
let a1 = parseInt(readLine()); 
let a2 = parseInt(readLine());
let a3 = parseInt(readLine());

//Input Processing

let r = a3/a2; //commmon ratio

//let a4 = r * a3 ; // acc. to formula An = r x An-1 where r is common ratio  
let a4 = a1 * r**3;
//Output
console.log(parseInt(a4)); //converted in Integer
