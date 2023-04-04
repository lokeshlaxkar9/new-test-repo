let n = 10;
count = 0;
for(let j = 2; j<n; j++){
let N = j;
factors = 0;

for(let i = 2; i*i < N; i++){
    if(N%i == 0){
    factors++;
    }
}

if(factors == 0){
    count++;
    console.log(N)
}
}
console.log(count)