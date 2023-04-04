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

let sz = parseInt(readLine());

let arr = [];

for(let i=0; i<sz; i++){
    arr.push(parseInt(readLine()))
}

console.log(arr);

let maxOccur = 0;
let currOccur = 1;

for(let i=1; i<sz; i++){
    if(arr[i] == arr[i-1]){
        currOccur++
    }
    else{
        if(maxOccur < currOccur){
            maxOccur = currOccur;
        }
        currOccur = 1;
    }
}
if(currOccur > maxOccur){
    maxOccur = currOccur;
}
let res = [];
currOccur = 1;


for(let i=1; i<sz; i++){
    if(arr[i] == arr[i-1]){
        currOccur++
    }
    else{
        if(maxOccur == currOccur){
            res.push(arr[i-1]);
        }
        currOccur = 1;
    }
}
if( currOccur > maxOccur){
    res.push(arr[sz-1]);
}


