function decimalToBinary(num) {
  let power = 0;
  let result = 0;
  while (num !== 0) {
    let rem = num % 2;
    result += rem * 10 ** power;
    num = Math.floor(num / 2);
    power++;
  }
  return result;
}

console.log(decimalToBinary(8));
