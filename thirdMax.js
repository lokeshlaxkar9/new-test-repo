let nums = [2, 2, 3, 1];

let max1 = -Infinity;
let max2 = -Infinity;
let max3 = -Infinity;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max1) {
    max1 = nums[i];
  }
}
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max2 && nums[i] < max1) {
    max2 = nums[i];
  }
}
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max3 && nums[i] < max2) {
    max3 = nums[i];
  }
}

if (max3 === -Infinity) {
  console.log(max1);
} else {
  console.log(max3);
}
