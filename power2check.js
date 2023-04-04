let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

if(n <= 0) {
    console.log(false);
}
else{
    while(n % 2 == 0 ){
        n=n/2;
      }
      if (n == 1 ) {
          console.log(true);
        }
      else {
          console.log(false); 
      }  
      
}

