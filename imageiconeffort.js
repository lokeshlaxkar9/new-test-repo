let arr1 = [7, 27, 31, 8, 9, 10, 25, 8, 9]; //length = 16

let arr2 = [8, 9]; // 4

stringCount = 0;

let i = 0;
let j = 0;

while (i <= arr1.length && j < arr2.length) {
  //   i=3,j=0   i=4,j=0  i=5j=1 i=6,j=2 i=7,j=3  i=8,j=0  i=9,j=0 i=10,j=0  i=11,j=1 i=12,j=2
  if (arr1[i] == arr2[j]) {
    // flase   false     false        false   true      true    true    true     fasle   true
    if (j == arr2.length - 1) {
      //false    false       flase      true    false      flase     faslse
      stringCount++;
      console.log(i, j);
      console.log(stringCount); //count =1
      j = -1; //j=0;
    }
    console.log(i, j);
    i++; //i=5   //i=6    i=7   i=8   i=11  i=12  i=13
    j++; //j=1   // j=2   j=3   j=0;   j=1;   j=2  j=3
  } else {
    i++;
    j = 0; //i=1 i=2 i=3   i=4 i=9  i=10
  }
}

console.log(stringCount);
