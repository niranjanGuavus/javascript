/**
 * It is best to search the sorted array, it's time complexity is O(log n)
 * @param {*} arr 
 * @param {*} minIndex 
 * @param {*} maxIndex 
 * @param {*} searchItem 
 * @returns 
 */

function binarySearch(arr, minIndex, maxIndex, searchItem) {
    if(maxIndex>=minIndex) {
      const midIndex = Math.floor((maxIndex+minIndex)/2);
      const midItem = arr[midIndex];
  
      if(midItem == searchItem)
      {
        return midIndex;
      }
  
      if(midItem < searchItem){
        return binarySearch(arr, midIndex+1, maxIndex, searchItem);
      }else
        return binarySearch(arr, minIndex, midIndex-1, searchItem);
    }
    return -1;
  }


  /**
   * BinarySearch with out recursion
   * @param {*} arr 
   * @param {*} item 
   * @returns 
   */
function binarySearchWithoutRecursion(arr, item){
    
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
  

  let searchArr = [1,2,3,4,5,6,7,8]
  console.log(binarySearch(searchArr, 0, searchArr.length-1, 5));

  