let nums =[1,2,2,1];   
let k = 1;
let count = 0;
for(let i =0; i<nums.length-1; i++){              
    let a = nums[i]                           
    for(let y = i+1; y < nums.length; y++){   
        if(Math.abs(a-nums[y]) == k){         
            count ++                          
        }                                              
    }
}
console.log(count)