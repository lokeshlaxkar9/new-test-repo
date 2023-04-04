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

let input = parseInt(readLine()); 
let i = input;
while (true){
  if(i % 2 == 0){
    console.log(i);
    break;
  }
  i += i; 
  
}

/* Another One
if(input % 2 == 0 ){
  console.log(input);
}
else{
  console.log(input*2);
}
*/