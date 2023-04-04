let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let input = readLine().split(" ");

let num1 = parseInt(input[0]);
let num2 = parseInt(input[1]);

//console.log(num1,num2);

let sum = num1+num2;

while(sum > 12){       //if sum is greater than 12 then we need to subtract 12 from it untill it is less than 12.
  sum = sum - 12;  
}

console.log(sum);