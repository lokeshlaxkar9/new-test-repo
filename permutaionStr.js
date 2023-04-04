function printPermutation(question, answer) {
  if (question.length == 0) {
    console.log(answer);
    return;
  }

  for (let i = 0; i < question.length; i++) {
    let character = question[i];
    let quesLeft = question.substring(0, i);
    let quesRight = question.substring(i + 1);
    let res = quesLeft + quesRight;
    printPermutation(res, answer + character);
  }
}

printPermutation("abc", "");
