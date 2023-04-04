
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

let arr = [];

for(let i = 0 ; i < n ; i++){
    arr[i] = parseInt(readLine()); // getting input 
}

for(x in arr){

let num = arr[x];

let factors = 2;

if(num < 2 ){
    console.log("No")
}

else{

  for(let i = 2; i < num; i++){
     if(num % i == 0 ){             // if a no has factors other than 1 and itself it is not prime
        factors++;
     }
   } 

   if(factors != 2){
      console.log("No")
   }

    else{
      console.log("Yes")
    }

}

}