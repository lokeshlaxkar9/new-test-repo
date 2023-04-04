let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());

let image = [];

for(let i = 0; i < n; i++){
    image.push(parseInt(readLine()))
}

let m = parseInt(readLine());

let icon = [];

for(let i= 0; i< m ; i++){
    icon.push(parseInt(readLine()))
}

// console.log(image)
// console.log(icon)
let totalCount =0;
let i=0;
let j=0
while(i<n && j<m){
    if(image[i] == icon[j]){
        if(j == m-1){
			totalCount++;
			j=-1;
		}
		i++;
		j++;
    }
    else{
        i++;
    }
}
console.log(totalCount)