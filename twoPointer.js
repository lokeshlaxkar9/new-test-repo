//Algoithm to find if two no. inside the sorted array has sum equal to given value

let arr = [1,5,7,9,11,17,23];
let sum = 100;
let left = 0;
right = arr.length-1;

for(;left!=right;){
  if(arr[left] + arr[right] == sum){
    console.log("true")
    break;
  }
  else if(arr[left] + arr[right] < sum){
    left++;
  }
  else{
    right--;
  }
}

if(left == right){
  console.log("false")
}


