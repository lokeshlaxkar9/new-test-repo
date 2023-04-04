function longestSubstr(string) {
  let longestSubstrLength = 1;
  let startingPos = -1;
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    let lastOccurence = obj[character];
    if (lastOccurence !== undefined) {
      startingPos = Math.max(startingPos, lastOccurence);
      startingPos = lastOccurence;
    }
    let lengthofSubstr = i - startingPos;
    longestSubstrLength = Math.max(longestSubstrLength, lengthofSubstr);
    obj[character] = i;
  }
  return longestSubstrLength;
}

function newFunction() {
  console.log(longestSubstr("ABCCDAEFCGC"));
}
