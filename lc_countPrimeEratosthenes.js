let n = 10;

let prime = [];

for(let i = 2; i<n; i++){
    prime[i] = 1;
}

// console.log(prime)   

for (let i =2; i*i<=n; i++){
    if(prime[i] == 1){
        for(let j = i*i; j<=n; j= j+i){
            prime[j] = 0;
        }
    }
}

let count = 0;

for(let i = 2; i<prime.length; i++){
    if(prime[i] ==1){
        count++;
    }
}

console.log(count)