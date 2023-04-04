function getSumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Number.parseInt(n / 10);
    sum += rem ** 2;
  }
  return sum;
}

let arr = [];
// it checks the square of digits leads to one or not.
function check(n) {
  //Base Condition
  if (n == 1) {
    return "Good";
  }
  if (arr.indexOf(n) >= 0) {
    return "Bad";
  }
  arr.push(n);
  return check(getSumOfSquares(n));
}
