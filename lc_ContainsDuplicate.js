let nums = [1,2,3,9,9];
let result = false;
for (let i in nums){
  sample = nums[i];
  for(let j in nums){
    if(j != i && sample == nums[j]){
      result = true;
      break;
    }
  
  }
 
}

console.log(result);

/*

Another Attempt

let nums = [1,3,0,9,8];
let result = false;
for (let i in nums){
  sample = nums[i];
  for(let j in nums){
    if(sample - nums[j] == 0 && i != j){
      result = true;
      break;
    }
  
  }
 
}

*/