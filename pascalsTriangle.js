function pascalTriangle(N) {
  if (N == 1) {
    return [1];
  } else if (N == 2) {
    return [1, 1];
  }

  let aboveRow = [1, 1];
  let row = [];
  for (let i = 3; i <= N; i++) {
    row[0] = 1;
    for (let j = 1; j <= i - 2; j++) {
      row[j] = aboveRow[j] + aboveRow[j - 1];
    }
    row.push(1);
    aboveRow = row;
  }

  return row;
}

let N = 3;

console.log(pascalTriangle(N));
