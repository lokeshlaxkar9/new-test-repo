let matrix = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]

let target = 11;

let ans = matrix.some(value => value.some(value => (value == target)));
console.log(ans)