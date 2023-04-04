let nums = [1,1,2];

let reslt = [];

for(let i = 0; i < nums.length ;){
    if(nums[i]==nums[i+1]){
        i++
    }
    else{
        reslt.push(nums[i])
        i++
    }
}

let k = reslt.length;

for(let i = 0; i <reslt.length;i++){
    nums[i] = reslt[i];
}

console.log(k) // question is confusing we are supposed to return k not nums,k 