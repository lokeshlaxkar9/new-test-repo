let nums = [333,12,2222,1,22]
let newArray =  nums.toString();
let i = 0;
let sum = 0 ;
//let abc = newArray.split(",")[0];
while(i < nums.length){
    let abc = newArray.split(",")[i];
    if(abc.length % 2 == 0 ){
      sum += 1; 
    }
    i++;
}

console.log(sum);

