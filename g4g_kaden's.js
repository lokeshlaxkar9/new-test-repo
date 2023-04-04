let arr = [-1,-2,-3,-4,-5,-6];

let N = 5;
let Maxsum = -Infinity;
let initialSum = 0
for(let i=0; i<N; i++){  //   0      1      2     3  4
    initialSum += arr[i]   // 1      3      6     4  9
    if(Maxsum < initialSum){ //true  true   true     true
        Maxsum = initialSum //1      3      6        9
        // console.log(Maxsum)
    }

    if(initialSum < 0){
        initialSum = 0;
    }
}

console.log(Maxsum)