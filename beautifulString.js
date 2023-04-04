let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let input = parseInt(readLine());
let arr = [];
for (let i = 0; i < input; i++) {
  arr[i] = readLine().trim();
}

for (let t = 0; t < input; t++) {
  word = arr[t];
  let subsringsOfWord = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 1; j <= word.length - i; j++) {
      subsringsOfWord.push(word.substr(i, j));
    }
  }

  // console.log(subsringsOfWord);

  // let resultantStings = [];
  let resultantCount = 0;

  for (let i = 0; i < subsringsOfWord.length; i++) {
    let countA = 0,
      countB = 0,
      countC = 0;

    for (let j = 0; j < subsringsOfWord[i].length; j++) {
      if (subsringsOfWord[i][j] == "a") {
        countA++;
      }
      if (subsringsOfWord[i][j] == "b") {
        countB++;
      }
      if (subsringsOfWord[i][j] == "c") {
        countC++;
      }
    }
    // console.log(countA, countB, countC);
    if (countA === countB && countC === countA) {
      // resultantStings.push(subsringsOfWord[i]);
      resultantCount++;
    }
  }

  console.log(resultantCount);
}
