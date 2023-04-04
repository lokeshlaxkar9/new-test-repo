let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//------------------Template----------------------------------------------------

let n = parseInt(readLine());

for(let i = 0 ; i < n; i++){
  let arr1 = readLine().split(" ")
  let arr2 = readLine().split(" ")
  let arr2length = arr2.length;
  let arr1length = arr1.length;
  if(arr1.length > arr2.length){
    arr2.length = arr1.length;
    arr2.fill(0,arr2length,arr1.length) // fill the rest of the elements with zero.
  }
  else if(arr1.length<arr2.length){
    arr1.length = arr2.length;
    arr1.fill(0, arr1length, arr1.length)
  }
  //---------------------------------------Just Input Taking and making length of both the arrays similar----------
  // console.log(arr1)
  // console.log(arr2)

  let sum = "";
  let carry = 0;

  let i = 0;

  while(i<arr1.length){                                           //i =0    i=1        //i=2
    if(carry == 1){                                              //false    false      true
      add = parseInt(arr1[i]) + parseInt(arr2[i]) + carry                           
      carry =0;
    }
    else{                                                          
     add = parseInt(arr1[i]) + parseInt(arr2[i]);                //add=3   add=13
    }

    if(add < 10){                                                //true     //false
      sum += add;                                                //3
      i++;                                                       //i=1
    }
    else{                                                                    //t
      add = add-10;                                                        //add=3
      sum += add;                                                          //sum=33
      carry++;                                                             //cary=1 
      i++;                                                                 //i=2           
    }

  }
  // console.log(carry)  
  if(carry == 1){ //We need to check carry for the last elements sum if it is there we need to print it.
    sum+=carry
    carry =0 
  }
  console.log(sum)
}
