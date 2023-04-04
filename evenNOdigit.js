let n = 1234;
let digit = 1;
while(n > 0){
    n = parseInt(n/10);
    digit += 1; 
}
console.log(digit);