let nums = [3,2,4];
let target = 6;
length = nums.length; // length =2
let ans = []   
for (let i = 0; i< length; i++ ){ //i=0
  let find = target - nums[i];  // 3 = 6-3 find = 3
  for(let q in nums){   //q=1
    
    if(nums[q] == find && q != i ){   // num[1](3) = 3   3 != 3   
       ans.push(i,parseInt(q));
       break;
    }
    

  }  
  if(ans != 0){
    break;
  }
}
console.log(ans);