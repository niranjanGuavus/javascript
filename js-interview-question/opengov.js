/* 
Given an array of characters and another array of words, 
find an efficient algorithm that can tell which words 
can be formed with the characters of the array.
*/

const chars = ["t", "e", "g", "r", "a", "o", "a", "m", "t", "z", "i"];

const words = ["gomeria", "arroz", "tarta"]; // true - false - true

function checkValid(words, chars) {
  var result = [];

  const charsMap = getCharFreq(chars);
  console.log("charsmap", charsMap);
  for (let j = 0; j < words.length; j++) {
    const word = words[j];
    const wordCharFreqDic = getCharFreq([...word]);
      
    let canMake = true;
    for (let [key, value] of wordCharFreqDic) {
      if (value > charsMap.get(key)) {
        canMake = false;
        break;
      }
    }
      
    console.log(canMake);
    result.push(canMake ? "true" : "false");
  }
  return result;
}

function getCharFreq(arrChr) {
  const charsMap = new Map();
  for (let i = 0; i < arrChr.length; i++) {
    const key = arrChr[i];
    if (charsMap.has(key)) {
      charsMap.set(key, charsMap.get(key) + 1);
    } else {
      charsMap.set(key, 1);
    }
  }
  return charsMap;
}
console.log("checking words");
const results = checkValid(words, chars);
console.log("results", results);
