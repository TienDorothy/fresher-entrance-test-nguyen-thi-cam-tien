function groupAnagrams(strs) {
  const groups = new Map();

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (groups.has(sortedStr)) {
      groups.get(sortedStr).push(str);
    } else {
      groups.set(sortedStr, [str]);
    }
  }

  return Array.from(groups.values());
}

// Example
let arrTest= ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(arrTest)); // Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]