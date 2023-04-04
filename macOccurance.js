let sz = parseInt(readLine());

let arr = [];

if(sz == 0){
    console.log(-1)
}
else{

for(let i=0; i<sz; i++){
    arr.push(parseInt(readLine()))
}
// console.log(arr)

let maxOccur = 0;
let currOccur = 1;

for(let i=1; i<sz; i++){        //i=1 2 3 4
    if(arr[i] == arr[i-1]){     // false false true true
        currOccur++             // 2 3  
    }
    else{
        if(maxOccur < currOccur){  // 0  
            maxOccur = currOccur; // 1    
        }
        currOccur = 1;       
    }
}
if(currOccur > maxOccur){
    maxOccur = currOccur;     //that's trick as we forget last no. do dry run
}

// console.log(maxOccur);
let res = [];
currOccur = 1; 
//1 2 3 3 3
for(let i=1; i<sz; i++){    //1  2 3 4
    if(arr[i] == arr[i-1]){  // false  flase true
        currOccur++      //3
    }
    else{
        if(maxOccur == currOccur){  //false
            res.push(arr[i-1]);        
        }
        currOccur = 1;
    }
}
if( currOccur == maxOccur){ // that's the tricky part
    res.push(arr[sz-1]);
}

for(let i of res){
    console.log(i);
}
}
