
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
    arr[i] = parseInt(readLine());  // taking input inside an array
}

let countArr = [];   //it will store number of occurences for unique values
let numberArr = [];  // it will contain all the unique numbers

for(let k = 0; k < arr.length ; ){
    let number = arr[k];                //for each array element we will check its count
    let count = 1;                       //initially its one for the number itself

    for(j = k+1 ; j < arr.length ; j++){
        if(number == arr[j]){                 //we will check how many times it has occured
            count++
        }
        else{
         break;                          //if next number is diffrent we break the loop and assign that number to number variable and check count again
        }
    }
    countArr.push(count)             // one by one push the count of each element in an array
    numberArr.push(number)           //one by one push unique no.
    k = k + count;                     // since we have the count we wll iterete to position where there is different elemnt
}
let item = 0;                       //it will strore the index no. of countArr so than it can be compared with the number array such that we find the number whoese count is 4

// console.log(numberArr)
// console.log(countArr)


for(let m = 0 ; m < countArr.length ; m++ ){
    if(countArr[m] >= 4 ){
        //indexno += m
        item =numberArr[m];
        break;
    }

}

if(item == 0){
    console.log(-1);
}
else{
    console.log(item)
}
