function paranthesisMatching(string) {
  let stack = [];
  function isOpening(str) {
    return str === "{" || str === "[" || str === "(";
  }

  function isMatching(a, b) {
    return (
      (a === "(" && b === ")") ||
      (a === "{" && b === "}") ||
      (a === "[" && b === "]")
    );
  }

  for (let i of string) {
    if (isOpening(i)) {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        return false;
      } else if (!isMatching(stack[stack.length - 1], i)) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

console.log(paranthesisMatching("[(])"));
