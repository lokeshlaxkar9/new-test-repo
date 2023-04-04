let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagram(arr) {
  arr.sort();
  let sortedWords = arr.map((word) => Array.from(word).sort().join(""));

  let map = new Object();

  for (let i = 0; i < arr.length; i++) {
    if (!map[sortedWords[i]]) {
      map[sortedWords[i]] = [arr[i]];
    } else {
      map[sortedWords[i]] = [...map[sortedWords[i]], arr[i]];
    }
  }

  return Object.values(map);
}

console.log(groupAnagram(arr));
