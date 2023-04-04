let arr = [5, 12, 8, 130, 44];

function isPrime(value){
  let i =2;
  while(i < Math.sqrt(value)){
    if(value % i++ == 0){
      return false;
    }
  }
  return value > 1 
}

console.log(arr.find(isPrime));