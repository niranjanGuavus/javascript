function countSubstr(str, subStr) {
  let count = 0;
  for (const [index,ch] of [...str].entries()){
      let substrPresent = true;
      for(let j=0; j<subStr.length; j++){
          if(str[index+j] !== subStr[j] ){
              substrPresent = false;
              break;
          }
      }
      if(substrPresent) ++count;

  }
  return count;
}


//console.log(countSubstr('helloWorldhello', 'hello'));


function binarySearch(arr, item){
// add whatever parameters you deem necessary - good luck!
let beginIndex = 0;
let endIndex = arr.length-1;

while(beginIndex <= endIndex) {
  const midIndex = Math.floor((endIndex+beginIndex)/2);
  console.log(`start:${beginIndex}  middle:${midIndex}  end:${endIndex}`)
  if(arr[midIndex] === item)
      return midIndex;
  if(item > arr[midIndex]) {
      beginIndex = midIndex+1;
  }else {
      endIndex = midIndex-1;
  }
}
return -1;
}

console.log(binarySearch([1,2,3,4,5], 5));