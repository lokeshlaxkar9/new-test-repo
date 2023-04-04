let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

function checkPowerof2(no) {
  let x = 0
  let ans = false;
  while(true){
    if (2**x == no ) {
      ans = true;
      break;
    }
    else if( x == 31) {
      ans = false;
      break;
    }
    x++;    
  }
  return ans;
}

console.log(checkPowerof2(n));