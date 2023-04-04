let container = [1,2,1];

let maxArea = 0;

// for(let i=0; i<container.length-1; i++){
//     let area = 1;
//     for(let j = i+1; j<container.length; j++){
//         let width = j-i;
//         area = (Math.min(container[i], container[j])) * width
//         if(area > maxArea){
//             maxArea = area;
//         }
//     }
// }
// console.log(maxArea)
//......................ABOVE APPROACH IS BRUTE FORCE--------------------------------------------------------------------------------------
let i = 0 ;
let j = container.length-1;
while(i<j){
    let area = (Math.min(container[i], container[j]) * (j-i))
    if(container[i]<container[j]){
        i++
    }
    else if(container[i]>container[j]){
        j--;
    }
    else{
        i++;
        j--;
    }
    maxArea = Math.max(maxArea, area)
    
}

console.log(maxArea)