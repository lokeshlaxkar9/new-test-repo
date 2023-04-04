let n = parseInt(readLine());

if(n == 0) {
    console.log(-1)
}

else{

let arr = [];

for(let i=0; i < n; i++){
    arr.push(parseInt(readLine()))    
}
let arrayCount = [];
let numberArray =[];

// console.log(arr)
let j = 0;
while(j < arr.length){
    let number = arr[j];
    let count = 1;
    for(let k = j+1; k < arr.length; k++){
        if(number == arr[k]){
            count++;
        }
        else{
            break;
        }
        
    }

    arrayCount.push(count);
    numberArray.push(number);
    j = j + count;
}

//  console.log(arrayCount);
//  console.log(numberArray);

let maxCount = 1;

for(let q = 0 ; q < arrayCount.length; q++){
    if (arrayCount[q] > maxCount){
        maxCount = arrayCount[q]
    }
}

for(let h = 0; h < arrayCount.length; h++  ){
    
    if(arrayCount[h]==maxCount ){
        console.log(numberArray[h])
    }
}

}