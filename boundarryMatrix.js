let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
length = arr.length;
for (let i = 0; i < arr[0].length; i++) {
  console.log(arr[0][i]);
}

for (let i = 1; i < arr.length; i++) {
  let j = arr[i].length - 1;
  console.log(arr[i][j]);
}

for (i = arr[length - 1].length - 2; i >= 0; i--) {
  console.log(arr[length - 1][i]);
}

for (let i = arr.length - 2; i > 0; i--) {
  console.log(arr[i][0]);
}
