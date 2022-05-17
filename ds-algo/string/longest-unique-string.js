function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let maxSubStr = "";
    let currentSubStr = "";
    let n = 0;
    while(n< str.length) {
        const index = currentSubStr.indexOf(str[n]);
        if(index != -1){
            maxSubStr = currentSubStr.length > maxSubStr.length ? currentSubStr : maxSubStr;
            currentSubStr = currentSubStr.slice(index+1);
        } 
        currentSubStr+= str[n];
        n++;
    }
    return maxSubStr.length > currentSubStr.length ? maxSubStr.length : currentSubStr.length;
}

console.log(findLongestSubstring('abcdagryt'));


function findLongestSubstring1(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    //console.log(`longest ${longest} i: ${i}  start: ${start}`)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log(seen);
    console.log(`start:: ${start} longest:: ${longest}`)
  }
  return longest;
}

// console.log(findLongestSubstring1('abcdagryt'));
console.log(findLongestSubstring1('hello'));