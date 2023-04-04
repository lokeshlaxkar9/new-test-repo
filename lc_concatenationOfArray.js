let nums = [1,3,2,1]
let ans =[];

for(let i=0; i<2 ; i++){ // each array element in pushed for i= 0 and then for i=1 again each array element were pushed 
  {
    for(let j of nums){
      ans.push(j);
    }
  }
}

console.log(ans);

// FASTER METHOD

/*let nums = [1,3,2,1]
let ans = nums;  // array has been pasted as it is
for(i in nums){
  ans.push(nums[i])  // same array elements were pushed one by one 
}

console.log(ans);
*/

// Another Approach
// let nums = [1,3,2,1]
// let ans = nums;
// console.log(ans.concat(nums));

//solved in one line;
//console.log(nums.concat(nums));
