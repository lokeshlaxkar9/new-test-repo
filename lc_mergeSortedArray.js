let nums1 =[0];
let nums2 = [1];
let arr = []

let m = 0;
let n = 1;

let i = 0;
let j = 0;

while(i < m && j < n ){
    if(nums1[i] < nums2[j]){
        arr.push(nums1[i]);
        i++;
    }
    else if(nums1[i] == nums2[j]){
        arr.push(nums1[i], nums2[j])
        i++
        j++
    }
    else if(nums1[i]> nums2[j]){
        arr.push(nums2[j])
        j++
    }
}

// console.log(i, j)

if(i == m && j<=n){
    while(j<n){
        arr.push(nums2[j])
        j++
    }
}
else if(j==n && i <= m){
    while(i<m){
        arr.push(nums1[i])
        i++
    }
}

for(let g = 0; g<arr.length;g++){
    nums1[g] = arr[g]
}



 console.log(nums1)
