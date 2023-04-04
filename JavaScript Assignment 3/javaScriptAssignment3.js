const { isUndefined } = require("util");

function rearrange(arr, n) {
  //code here
  let res = [];
  let positiveIndex = 0;
  let negativeIndex = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      res[positiveIndex] = arr[i];
      positiveIndex += 2;
    } else {
      res[negativeIndex] = arr[i];
      negativeIndex += 2;
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === undefined) {
      res.splice(i, 1);
    }
  }

  return res;
}

let arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
let n = 10;
console.log(rearrange(arr, n));
