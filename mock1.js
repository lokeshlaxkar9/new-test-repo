/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
			Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]	


1 left=0 mult=1  right = 1  mult= 1  (2 3 4) */

let arr = [-1, 1, 0, -3, 3];

let mult = 1;
let flag = true;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    mult *= arr[i];
  }
  if (arr[i] == 0) {
    flag = false;
    count++;
  }
}

console.log(mult);

let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (flag == true) {
    arr2.push(mult / arr[i]);
  } else if (flag == false && count == 1) {
    if (arr[i] != 0) {
      arr2.push(0);
    } else {
      arr2.push(mult);
    }
  } else if (flag == false && count > 1) {
    arr2.push(0);
  }
}

console.log(arr2);
