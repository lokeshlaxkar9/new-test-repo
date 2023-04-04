let arr = [7, 2, 234, 63, -123, 90, 0, 23];
let arr2 = [1, 4, 35, 6, 0, 6, -64, 786];
let arr3 = [-10, -1, 5, -5, 56, -43, 43, 0];
function insertionSortL(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      while (arr[i] < arr[i - 1] && i > 0) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        i--;
      }
    }
  }
  return arr;
}

function insertionSortS(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

function inserstionSortOptimum(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSortS(arr2));
console.log(insertionSortL(arr));
console.log(inserstionSortOptimum(arr3));
