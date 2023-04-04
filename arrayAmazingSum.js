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

let linesNo = parseInt(readLine());
let ans = "False"

let arr = [];
for(let i = 0; i < linesNo; i++){
   a = parseInt(readLine());
  arr.push(a);
}
// console.log(arr)

for(let i = 0; i<linesNo;i++){
  sum = arr[i] + arr[i+1];
  if(sum > 100 ){
    ans = "True"
    break;
  } 
  
}

console.log(ans);