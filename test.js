function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let maxAmt = -Infinity;
  while (i < j) {
    if (height[i] < height[j]) {
      let amt = (j - i) * height[i];
      if (maxAmt < amt) {
        maxAmt = amt;
      }
      i++;
    } else {
      let amt = (j - i) * height[j];
      if (maxAmt < amt) {
        maxAmt = amt;
      }
      j--;
    }
  }
  return maxAmt;
}

let height = [1, 2, 1];
console.log(maxArea(height));
