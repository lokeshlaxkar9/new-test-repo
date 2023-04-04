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

let N = parseInt(readLine()); // top face value (input)

//conditionals
/*
if (N == 1) {
    console.log(6);
}
else if (N == 2) {
    console.log(5);
}
else if (N==3) {
    console.log(4);
}
else if (N==4) {
    console.log(3);
}
else if (N==5) {
    console.log(2);
}
else if (N==6) {
    console.log(1);
}
*/
switch (N<=6 && N>0) {
    case N==1: 
        console.log(6);
        break;

    case N==2:
        console.log(5);
        break;
    
    case N==3:
        console.log(4);
        break;

    case N==4:
        console.log(3);
        break;
    
    case N==5:
        console.log(2);
        break;
        
    case N==6:
        console.log(1);

}
